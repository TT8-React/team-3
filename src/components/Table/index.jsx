import React from "react";
import {
  ActionField,
  Table,
  TableBody,
  TableField,
  TableHead,
  TableRow,
  TableTitle,
} from "./table.js";
import tableData from "./fackData.js";
import { DeleteIcon, EditIcon } from "../Icons";

let nextId = 1;

function Index() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableData.header.map((item) => (
            <TableTitle>{item}</TableTitle>
          ))}
          <TableTitle>Action</TableTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(tableData.rows).map((row) => (
          <TableRow key={nextId++}>
            {tableData.rows[row].map((rowField) => (
              <TableField key={nextId++}>{rowField}</TableField>
            ))}
            <ActionField>
              <EditIcon />
              <DeleteIcon />
            </ActionField>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Index;
