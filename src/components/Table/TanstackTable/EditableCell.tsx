import React from "react";
import styles from "./TanstackTable.module.scss";
import { CellContext } from "@tanstack/react-table";
import type { TanstackMeta, TanstackRecord } from "./TanstackTableTypes";

type EditableCellProps = CellContext<TanstackRecord, string> & {};
export const EditableCell = ({
  getValue,
  row,
  column,
  table,
}: EditableCellProps) => {
  const initialValue = getValue();
  const [value, setValue] = React.useState(initialValue);

  function onBlur() {
    const meta = table.options.meta as TanstackMeta;
    meta?.updateData(row.index, column.id, value);
  }

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles.editable_cell}
      onBlur={onBlur}
    />
  );
};
