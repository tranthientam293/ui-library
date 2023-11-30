import { CellContext } from "@tanstack/react-table";
import React from "react";
import { TanstackMeta, TanstackRecord } from "./TanstackTableTypes";
import styles from "./TanstackTable.module.scss";

type StatusCellProps = CellContext<TanstackRecord, Date> & {};

export function DateCell({ getValue, column, row, table }: StatusCellProps) {
  const date = getValue();
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const meta = table.options.meta as TanstackMeta;
    const date = e.target.value;
    meta?.updateData(row.index, column.id, new Date(date));
  };

  console.log(ParseStringDate(date));

  return (
    <input
      type="date"
      value={ParseStringDate(date)}
      onChange={onChange}
      className={styles.date_cell}
    />
  );
}

function ParseStringDate(date?: Date) {
  if (!date) return;
  const dateString = new Intl.DateTimeFormat("en-GB")
    .format(date)
    .replaceAll("/", "-")
    .split("-")
    .reverse()
    .join("-");

  return dateString;
}
