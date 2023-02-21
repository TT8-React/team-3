import styled, { css } from "styled-components";

// ====================================
// css units
const tableRow = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const tableCell = css`
  padding-block: 0.6rem;
  padding-inline: 1.5rem;
`;
// ====================================
// styled components

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  background-color: #e5e5e5;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`

`;

export const TableTitle = styled.th`
  ${tableCell}
`;
export const TableField = styled.td`
  ${tableCell}
`;

export const ActionField = styled(TableField)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  svg{
    cursor: pointer;
  }
`;
