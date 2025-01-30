"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Lead {
  id: number;
  name: string;
  state: 'PENDING' | 'REACHED_OUT';
}

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
      fetchLeads();
    } else {
      router.push('/login');
    }
  }, [router]);

  const fetchLeads = () => {
    setLeads([
      { id: 1, name: 'John Doe', state: 'PENDING' },
      { id: 2, name: 'Jane Smith', state: 'REACHED_OUT' },
    ]);
  };

  if (!authenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Leads List</h1>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            {lead.name} - {lead.state}
          </li>
        ))}
      </ul>
    </div>
  );
}
