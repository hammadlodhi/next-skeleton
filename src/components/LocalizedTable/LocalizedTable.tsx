import React from "react";
import { LocalizedHeading } from "../LocalizedHeading/LocalizedHeading";

type strOrNum = string | number | React.ReactElement;

type IData = Record<string, strOrNum>;

interface ITable {
  columns?: Array<string>;
  data?: Array<any>;
  desc: string;
}

const kebabToCamel = (kebabCaseString: string): string =>
  kebabCaseString.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const Table: React.FC<ITable> = ({ columns, data, desc }) => {
  const rows = data?.map((dataObject: IData, index: number) => ({
    ...dataObject,
    sno: index,
  }));

  return (
    <table className="table">
      <thead className="table__table-thead">
        <tr className="table__table-row">
          {columns?.map((title: string, index: number) => (
            <th
              key={index}
              className={`${index !== 0 && "table__center"} table__th`}
            >
              {title.replaceAll("-", "_").toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.length === 0 ? (
          <LocalizedHeading t={desc} heading="h3" />
        ) : (
          rows?.map((row: any) => (
            <tr key={row.sno} className="table__table-row">
              {columns?.map((columnTitle: string, index: number) => (
                <td
                  key={index}
                  className={`${index !== 0 && "table__center"} table__td`}
                >
                  {row[kebabToCamel(columnTitle)]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
