import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const openDb = () => {
  return new sqlite3.Database(path.join(process.cwd(), 'database', 'leads.db'));
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10); 
    const limit = parseInt(searchParams.get('limit') || '10', 10); 

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json(
        { message: 'Parâmetros de paginação inválidos' },
        { status: 400 }
      );
    }

    const offset = (page - 1) * limit;

    const db = openDb();

    const leads = await new Promise<any[]>((resolve, reject) => {
      db.all(
        `SELECT * FROM leads LIMIT ? OFFSET ?`,
        [limit, offset],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });

    const total = await new Promise<number>((resolve, reject) => {
      db.get(
        `SELECT COUNT(*) as total FROM leads`,
        (err, row: { total: number }) => {
          if (err) reject(err);
          resolve(row.total);
        }
      );
    });

    db.close();

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: leads,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    return NextResponse.json(
      { message: 'Erro ao buscar leads', error: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    );
  }
}