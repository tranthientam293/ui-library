import type { CellContext } from "@tanstack/react-table";
import type { Status, TanstackRecord } from "./TanstackTableTypes";
import { STATUSES } from "./TanstackTable.mock";
import styles from "./TanstackTable.module.scss";

type StatusCellProps = CellContext<TanstackRecord, Status> & {};

export const StatusCell = ({
  getValue,
  row,
  column,
  table,
}: StatusCellProps) => {
  const { name, color } = getValue() || {};
  return (
    <select
      className={styles.status_cell}
      style={{ backgroundColor: color || "transparent" }}
      value={name || ""}
    >
      <option style={{ display: "none" }}></option>
      {STATUSES.map((status) => (
        <option key={status.name}>{status.name}</option>
      ))}
    </select>
  );
};
