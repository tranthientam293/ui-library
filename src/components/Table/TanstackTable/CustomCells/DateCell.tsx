import React from "react"
import { CellContext } from "@tanstack/react-table"
import styles from "../TanstackTable.module.scss"

type StatusCellProps = CellContext<TanstackRecord, Date> & {}

export function DateCell({ getValue, column, row, table }: StatusCellProps) {
  const date = getValue()
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const date = e.target.value
    table.options.meta?.updateData(row.index, column.id, new Date(date))
  }

  return (
    <input
      type="date"
      value={ParseStringDate(date)}
      onChange={onChange}
      className={styles.date_cell}
    />
  )
}

function ParseStringDate(date?: Date) {
  if (!date) return
  const dateString = new Intl.DateTimeFormat("en-GB")
    .format(date)
    .replaceAll("/", "-")
    .split("-")
    .reverse()
    .join("-")

  return dateString
}
