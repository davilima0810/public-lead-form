import { IncomingForm, Files, Fields } from 'formidable';
import path from 'path';
import sqlite3 from 'sqlite3';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false, 
  },
};


const openDb = () => {
  const db = new sqlite3.Database(path.join(process.cwd(), 'database', 'leads.db'));
  db.run(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      linkedin TEXT,
      visas TEXT,
      openInput TEXT,
      status TEXT DEFAULT 'PENDING',
      cvPath TEXT NOT NULL
    );
  `);
  return db;
};


const parseForm = (req: Readable): Promise<{ fields: Fields; files: Files }> => {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), 'uploads'),
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export async function POST(req: Request) {
  try {
    const chunks: Uint8Array[] = [];
    const reader = req.body?.getReader();
    if (!reader) {
      throw new Error('No readable stream available');
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) chunks.push(value);
    }

    const buffer = Buffer.concat(chunks);

    
    const simulatedReq = new Readable();
    simulatedReq.push(buffer);
    simulatedReq.push(null); 

    
    const headers = {
      'content-type': req.headers.get('content-type') || '',
      'content-length': buffer.length.toString(),
    };

    Object.assign(simulatedReq, { headers });

    const { fields, files } = await parseForm(simulatedReq);

    
    const firstName = fields.firstName ? fields.firstName[0] : null;
    const lastName = fields.lastName ? fields.lastName[0] : null;
    const email = fields.email ? fields.email[0] : null;
    const linkedin = fields.linkedin ? fields.linkedin[0] : null;
    const visas = fields.visas ? fields.visas[0] : null;
    const description = fields.openInput ? fields.openInput[0] : null;

    
    const file = files.resume ? files.resume[0] : null;
    if (!file) {
      return NextResponse.json({ message: 'CV é obrigatório' }, { status: 400 });
    }

    const filePath = file.filepath; 

    
    if (!firstName || !lastName || !email || !linkedin || !filePath || !description) {
      return NextResponse.json({ message: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    
    const db = openDb();
    return new Promise((resolve) => {
      db.run(
        `INSERT INTO leads (firstName, lastName, email, linkedin, visas, openInput, cvPath) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, email, linkedin, visas, description, filePath],
        function (err) {
          if (err) {
            console.error('Erro no banco de dados:', err);
            resolve(NextResponse.json({ message: 'Erro ao salvar no banco de dados', error: err }, { status: 500 }));
          } else {
            resolve(NextResponse.json({ message: 'Cadastro realizado com sucesso!' }, { status: 200 }));
          }
        }
      );
    });
  } catch (error) {
    console.error('Erro ao processar upload:', error);
    return NextResponse.json(
      { message: 'Erro no upload', error: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    );
  }
}