import { EditableCell } from "./EditableCell";
import { TANSTACK_MOCK_DATA } from "./TanstackTable.mock";
import styles from "./TanstackTable.module.scss";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import React from "react";
import type { TanstackMeta, TanstackRecord } from "./TanstackTableTypes";
import { StatusCell } from "./StatusCell";
import { DateCell } from "./DateCell";

type TanstackTablePRops = {};

const columns: ColumnDef<TanstackRecord, any>[] = [
  {
    accessorKey: "task",
    header: "Task",
    cell: EditableCell,
    size: 250,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
    size: 225,
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: DateCell,
    size: 225,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props) => <p>{props.getValue()}</p>,
    size: 225,
  },
];

export const TanstackTable = ({}: TanstackTablePRops) => {
  const [data, setData] = React.useState<TanstackRecord[]>(TANSTACK_MOCK_DATA);
  const tableInstance = useReactTable<TanstackRecord>({
    //required values
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //required values
    columnResizeMode: "onChange", //how column resizing is applied, onChange: applied immediately, onEnd: applied when resizing done
    //functions manipulating each cell of table
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, i) =>
            i === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    } as TanstackMeta,
  });

  const headerGroups = tableInstance.getHeaderGroups();
  const tableBody = tableInstance.getRowModel();

  return (
    <div className={styles.tanstack_wrapper}>
      <table
        className={styles.tanstack_table}
        style={{ width: tableInstance.getTotalSize() }}
      >
        <thead className={styles.tanstack_table_thead}>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.tanstack_table_row}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: header.getSize() }}
                  className={styles.tanstack_table_th}
                >
                  {header.column.columnDef.header as string}
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`${styles.resizer} ${
                      header.column.getIsResizing() ? styles.isResizing : ""
                    }`}
                  ></div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tanstack_table_tbody}>
          {tableBody.rows.map((row) => (
            <tr key={row.id} className={styles.tanstack_table_row}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ width: cell.column.getSize() }}
                  className={styles.tanstack_table_td}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
