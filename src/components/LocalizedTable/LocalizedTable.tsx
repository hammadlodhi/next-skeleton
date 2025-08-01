import React from "react";
import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";
import { LocalizedHeading } from "../LocalizedHeading/LocalizedHeading";

type strOrNum = string | number | React.ReactElement;
type IData = Record<string, strOrNum>;

interface ITable {
  columns?: string[];
  data?: Array<any>;
  desc: string;
}

const kebabToCamel = (kebabCaseString: string): string =>
  kebabCaseString.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const Table: React.FC<ITable> = ({ columns = [], data = [], desc }) => {
  const rows = data.map((item, index) => ({ ...item, sno: index + 1 }));

  return (
    <Box overflow="auto">
      <MuiTable size="small">
        <TableHead>
          <TableRow>
            {columns.map((title, index) => (
              <TableCell
                key={index}
                align={index === 0 ? "left" : "center"}
                sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              >
                {title.replaceAll("-", "_").toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <LocalizedHeading t={desc} heading="h3" />
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    align={colIndex === 0 ? "left" : "center"}
                  >
                    {row[kebabToCamel(col)]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </MuiTable>
    </Box>
  );
};

export default Table;
