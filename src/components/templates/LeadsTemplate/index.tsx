"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import TablePagination from '@/components/molecules/TablePagination';
import * as S from "./styles";

interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
}

const titles = [
  { label: 'ID', value: 'id' },
  { label: 'Name', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Status', value: 'status' },
  { label: 'Actions', value: 'actions' },
];

export default function LeadsTemplate() {
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

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }

      const data = await response.json();
      setLeads(data.data);
    } catch (error) {
      console.log(error)
    }
  };
  const updateLeadStatus = async (id: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update lead status');
      }

      // Update the local state to reflect the change
      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead.id === id ? { ...lead, status: newStatus } : lead
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeStatus = (id: number) => {
    const lead = leads.find((lead) => lead.id === id);
    if (lead && lead.status === 'PENDING') {
      updateLeadStatus(id, 'REACHED_OUT');
    }
  };

  if (!authenticated) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <h1>Leads</h1>
      <TablePagination
        titles={titles}
        data={leads.map((lead) => ({
          id: lead.id,
          name: `${lead.firstName} ${lead.lastName}`,
          email: lead.email,
          status: lead.status,
          actions: (
            <S.ButtonSubmit
              onClick={() => handleChangeStatus(lead.id)}
              disabled={lead.status === 'REACHED_OUT'}
              className={lead.status === 'PENDING' ? "desactive" : "desactive"}
            >
              {lead.status === 'PENDING' ? 'Mark as Reached Out' : 'Reached Out'}
            </S.ButtonSubmit>
          ),
        }))}
        onPageChange={(page) => console.log(`Page changed to: ${page}`)}
      />
    </S.Container>
  );
}