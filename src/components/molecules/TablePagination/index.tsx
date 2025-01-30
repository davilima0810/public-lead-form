import React from 'react';
import styled from 'styled-components';

interface TablePaginationProps {
  titles: { label: string; value: string }[];
  data: any[];
  onPageChange: (page: number) => void;
}

// Componentes estilizados
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse; /* Colapsa as bordas para evitar duplicação */
  margin: 20px 0;
  text-align: center;
  background-color: white;
  border-radius: 10px; /* Bordas arredondadas */
  overflow: hidden; /* Garante que as bordas arredondadas sejam aplicadas corretamente */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para dar profundidade */
`;

const TableHeader = styled.thead`
  background-color: #f4f4f4;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  border-bottom: 2px solid #ddd; /* Borda horizontal no cabeçalho */
  background-color: white; /* Fundo branco para células do cabeçalho */
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd; /* Borda horizontal nas células */
  background-color: white; /* Fundo branco para células do corpo */
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const TablePagination: React.FC<TablePaginationProps> = ({ titles, data, onPageChange }) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <tr>
            {titles.map((title) => (
              <TableHeaderCell key={title.value}>{title.label}</TableHeaderCell>
            ))}
          </tr>
        </TableHeader>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {titles.map((title) => (
                <TableCell key={title.value}>{row[title.value]}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <PaginationContainer>
        <PaginationButton onClick={() => onPageChange(1)}>1</PaginationButton>
        <PaginationButton onClick={() => onPageChange(2)}>2</PaginationButton>
        {/* Adicione mais botões de paginação conforme necessário */}
      </PaginationContainer>
    </TableContainer>
  );
};

export default TablePagination;