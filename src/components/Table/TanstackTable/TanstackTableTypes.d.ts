import { TableMeta } from "@tanstack/react-table";

export type Status = { id: number; name: string; color: string };

type UpdateTotalTable = (
  rowIndex: number,
  columnId: string,
  value: unknown
) => unknown;

export type TanstackMeta =
  | (TableMeta<TanstackRecord> & {
      updateData: UpdateTotalTable;
    })
  | undefined;

export type TanstackRecord = {
  task: string;
  status: Status | null;
  due: Date | null;
  notes: string;
};
