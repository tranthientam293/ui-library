import {
  ColumnType,
  DefaultRecordType,
  ExpandableConfig,
} from "rc-table/lib/interface";

type RecordType = DefaultRecordType & {};
export const columns: ColumnType<RecordType>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "20%",
    render: (value) => <div style={{ textAlign: "center" }}>{value}</div>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: "20%",
    render: (value) => <div style={{ textAlign: "center" }}>{value}</div>,
  },
  {
    title: "Operations",
    dataIndex: "",
    key: "operations",
    render: () => (
      <div className="actions">
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.alert("deleted");
          }}
        >
          Delete
        </button>
      </div>
    ),
  },
];

export const data: RecordType[] = [
  { name: "Jack", age: 28, address: "Some where", key: "1" },
  { name: "Rose", age: 36, address: "Some where", key: "2" },
  { name: "Dave", age: 36, address: "Some where", key: "3" },
  { name: "John", age: 36, address: "Some where", key: "4" },
  { name: "Clack", age: 36, address: "Some where", key: "5" },
];

export const mockPaginationData: RecordType[] = [
  ...data,
  { name: "Jack-01", age: 28, address: "Some where", key: "6" },
  { name: "Rose-01", age: 36, address: "Some where", key: "7" },
  { name: "Dave-01", age: 36, address: "Some where", key: "8" },
  { name: "John-01", age: 36, address: "Some where", key: "9" },
  { name: "Clack-02", age: 36, address: "Some where", key: "10" },
  { name: "Jack-02", age: 28, address: "Some where", key: "11" },
  { name: "Rose-02", age: 36, address: "Some where", key: "12" },
  { name: "Dave-02", age: 36, address: "Some where", key: "13" },
  { name: "John-02", age: 36, address: "Some where", key: "14" },
  { name: "Clack-02", age: 36, address: "Some where", key: "15" },
];

export const mockExpandableConfig: ExpandableConfig<RecordType> = {
  onExpand: (expanded, record) => console.log({ expanded, record }),
  onExpandedRowsChange: (expandedKeys) => console.log({ expandedKeys }),
};
