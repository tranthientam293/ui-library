export * from "@tanstack/table-core"
declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => unknown
  }
}
