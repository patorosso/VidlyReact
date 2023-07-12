import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, items, sortColumn, onSort }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody items={items} columns={columns} />
    </table>
  );
};

export default Table;
