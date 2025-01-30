import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const openDb = () => {
  return new sqlite3.Database(path.join(process.cwd(), 'database', 'leads.db'));
};

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { status } = await request.json();

  const db = openDb();

  return new Promise((resolve) => {
    db.run(
      `UPDATE leads SET status = ? WHERE id = ?`,
      [status, id],
      function (err) {
        db.close();
        if (err) {
          resolve(NextResponse.json({ message: 'Failed to update lead status', error: err }, { status: 500 }));
        } else {
          resolve(NextResponse.json({ message: 'Lead status updated successfully' }, { status: 200 }));
        }
      }
    );
  });
}