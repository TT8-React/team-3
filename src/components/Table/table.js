import styled, { css } from "styled-components";

// ====================================
// css units

// $border-color: black;

const tableRow = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* gap: 4.5rem; */
  /* background-color: #e5e5e5; */
`;

const tableCell = css`
  padding-block: 0.6rem;
  padding-inline: 1.5rem;
  /* border-bottom: 1px solid black; */
  /* width: 100%; */
  /* &:not(:first-child) {
    border-left: 1px solid black;
  } */
`;
// ====================================
// styled components

export const Table = styled.table`
  /* border: 1px solid black;
  border-bottom-color: transparent; */
`;

export const TableHead = styled.thead`
  /* ${tableRow} */
  background-color: #e5e5e5;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  /* ${tableRow}
  flex: 1; */
`;

export const TableTitle = styled.th`
  ${tableCell}
`;
export const TableField = styled.td`
  ${tableCell}/* text-align: center;  */
  /* border: 1px solid; */
`;

export const ActionField = styled(TableField)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  /* border: 1px solid black; */
`;
