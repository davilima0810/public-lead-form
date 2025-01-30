import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';
import db from '@/utils/db';

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveFile = async (file: File) => {
  const data = fs.readFileSync(file.filepath);
  const filePath = path.join(process.cwd(), 'uploads', file.originalFilename || '');
  fs.writeFileSync(filePath, data);
  fs.unlinkSync(file.filepath); 
  return filePath;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: path.join(process.cwd(), 'uploads'), // 
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao processar o formulário' });
      }

      try {
        const { firstName, lastName, email, linkedin, visas, openInput } = fields;
        const resumeFile = files?.resume as formidable.File; 

        if (!firstName || !lastName || !email || !resumeFile) {
          return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }
        
        const filePath = await saveFile(resumeFile);

        const insertStmt = db.prepare(`
          INSERT INTO leads (firstName, lastName, email, linkedin, visas, openInput, cvPath)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `);
        insertStmt.run(firstName, lastName, email, linkedin, visas, openInput || '', filePath);

        res.status(200).json({ message: 'Lead criado com sucesso!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao salvar os dados' });
      }
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
