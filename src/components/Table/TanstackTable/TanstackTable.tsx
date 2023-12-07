import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React from "react"
import { DateCell, EditableCell, StatusCell } from "./CustomCells"
import { TANSTACK_MOCK_DATA } from "./TanstackTable.mock"
import styles from "./TanstackTable.module.scss"

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
]

export const TanstackTable = () => {
  const [data, setData] = React.useState<TanstackRecord[]>(TANSTACK_MOCK_DATA)
  const tableInstance = useReactTable<TanstackRecord>({
    //required values
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //required values

    //automatic pagination
    getPaginationRowModel: getPaginationRowModel(),
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
    },
  })

  // DO NOT cached 2 below properties, because it need change when update global data
  const headerGroups = tableInstance.getHeaderGroups()
  const tableBody = tableInstance.getRowModel()

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
      <div className={styles.pagination}>
        <button
          className={styles.pagination_btn}
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          prev
        </button>
        {tableInstance.getPageOptions().map((page, i) => (
          <button
            key={i}
            className={`${styles.pagination_btn} ${
              page === tableInstance.getState().pagination.pageIndex
                ? styles.active
                : ""
            }`}
            onClick={() => tableInstance.setPageIndex(page)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className={styles.pagination_btn}
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          next
        </button>
        <label htmlFor="page-size" className={styles.page_size_label}>
          Choose page size
        </label>
        <select
          id="page-size"
          className={styles.page_size_select}
          onChange={(e) => tableInstance.setPageSize(parseInt(e.target.value))}
          value={tableInstance.getState().pagination.pageSize}
        >
          {[5, 10, 15, 20].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
