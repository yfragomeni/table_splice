import React, { useState } from "react";
import useTable from "../../Hooks/useTable";
import PaginationComponent from "../Pagination";
import { Table, Td, THead, ThHead } from "./styles";
import { TableComponentProps } from "./types";

const TableComponent = ({
  columns,
  datasource,
  rowsPerPage,
}: TableComponentProps) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(datasource, page, rowsPerPage);

  return (
    <>
      <Table>
        <THead>
          <tr>
            {columns.map((column, key) => (
              <ThHead key={key}>{column.title}</ThHead>
            ))}
          </tr>
        </THead>
        <tbody>
          {slice.map((row, key) => (
            <tr key={key}>
              {Object.keys(row).map((fkey, k) => (
                <Td key={k}>{row[fkey]}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {rowsPerPage && (
        <PaginationComponent
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      )}
    </>
  );
};

export default TableComponent;
