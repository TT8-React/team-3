import React from "react";
import {
  ActionField,
  Table as TableStyle,
  TableBody,
  TableField,
  TableHead,
  TableRow,
  TableTitle,
} from "./table.js";

import tableData from "../../mock/fakeDataTable.js";
import { DeleteIcon, EditIcon } from "../icons";
import CustomLink from "../CustomLink/index.jsx";
import { PATHS } from "../../routes/index.jsx";

let nextId = 1;

const Table = () => {
  return (
    <TableStyle>
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
              <CustomLink to={PATHS.REPORT_EDIT}>
                <EditIcon />
              </CustomLink>
              <DeleteIcon />
            </ActionField>
          </TableRow>
        ))}
      </TableBody>
    </TableStyle>
  );
}

export default Table;
