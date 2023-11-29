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

type TanstackTablePRops = {};

const columns: ColumnDef<TanstackRecord, any>[] = [
  {
    accessorKey: "task",
    header: "Task",
    cell: EditableCell,
    size: 225,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: (props) => <p>{props.getValue()?.toLocaleString()}</p>,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props) => <p>{props.getValue()}</p>,
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

  const { headerGroups, tableBody } = React.useMemo(() => {
    const headerGroups = tableInstance.getHeaderGroups();
    const tableBody = tableInstance.getRowModel();

    return { headerGroups, tableBody };
  }, [tableInstance]);

  console.log(data);

  return (
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
  );
};
