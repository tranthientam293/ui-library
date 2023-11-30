import type { CellContext } from "@tanstack/react-table"
import styles from "../TanstackTable.module.scss"
import { STATUSES } from "../TanstackTable.mock"

type StatusCellProps = CellContext<TanstackRecord, Status> & {}

export const StatusCell = ({
  getValue,
  row,
  column,
  table,
}: StatusCellProps) => {
  const { name, color } = getValue() || {}
  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const status = STATUSES.find((item) => item.name === e.target.value) || null
    table.options.meta?.updateData(row.index, column.id, status)
  }

  return (
    <select
      className={styles.status_cell}
      style={{ backgroundColor: color || "transparent" }}
      value={name}
      onChange={onChange}
    >
      <option>-</option>
      {STATUSES.map((status) => (
        <option key={status.name} value={status.name}>
          {status.name}
        </option>
      ))}
    </select>
  )
}
