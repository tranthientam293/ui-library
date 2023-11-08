import React from "react";
import Table, { TableProps } from "rc-table";
import { DefaultRecordType, ExpandableConfig } from "rc-table/lib/interface";
import Pagination from "rc-pagination";
import "./RCTable.scss";
import "rc-pagination/assets/index.css";

type RecordType = DefaultRecordType & {};
type RCTableProps<T extends RecordType = any> = Omit<
  TableProps<T>,
  "footer" | "title"
> & {
  expandable?: Omit<
    ExpandableConfig<T>,
    "expandIconColumnIndex" | "indentSize" | "fixed"
  >;
  pagination?: {
    pageSize?: number;
    onPaginationChange?: (page: number) => void;
  };
};

const PAGE_SIZE = 5;

export function RCTable<T extends RecordType = any>({
  data,
  columns,
  expandable,
  pagination,
  ...restProps
}: RCTableProps<T>) {
  const [page, setPage] = React.useState(1);
  const size = pagination?.pageSize ?? PAGE_SIZE;

  const renderData: T[] | undefined = React.useMemo(() => {
    return data?.filter(
      (_, index) => index < page * size && index >= (page - 1) * size
    );
  }, [data, page, size]);

  const expandableConfig = React.useMemo(() => {
    if (expandable) {
      return {
        expandRowByClick: true,
        // set expaned icon
        expandIcon: (props) => (
          <div className={props.expanded ? "expanded" : "collapse"}>
            <ChevronDown />
          </div>
        ),
        // define ui of expanded row
        expandedRowRender: (record) => (
          <div className="expanded-row">{`${record.name} - ${record.age} - ${record.address}`}</div>
        ),
        // set condition for expanding row
        rowExpandable: (record) => record.name != "Joe",
        // set row expanded on initial loaded, manipulate by key
        expandedRowKeys: undefined,
        // set all rows expanded on initial loaded, only works if expandedRowKeys is not set
        defaultExpandAllRows: false,
        // set row expanded by default, only works if expanedRowKeys is not set
        defaultExpandedRowKeys: [],
        // set className of row that contains expaned row
        expandedRowClassName: () => "active",
        // function that executed when row is expanded or collapsed
        onExpand: () => {},
        // function that executed when array of expaned rows changed
        onExpandedRowsChange: () => {},
        ...expandable,
      } satisfies ExpandableConfig<T>;
    }
  }, [expandable]);

  return (
    <Table
      // define table column
      columns={columns}
      // define table data
      data={renderData}
      // className prefix of table
      prefixCls="custom-table"
      // id of table wrapper
      id="custom-table"
      // configure expanded row
      expandable={expandableConfig}
      // custom pagination
      footer={() =>
        pagination && data ? (
          <Pagination
            className="custom-pagination"
            total={data.length}
            pageSize={size}
            onChange={(page) => {
              setPage(page);
              pagination.onPaginationChange?.(page);
            }}
            showTitle={false}
            showSizeChanger={true}
            showTotal={(total, range) => {
              if (range[0] !== range[1]) {
                return (
                  <div>{`Item no: ${range[0]} - ${range[1]} ・ Total: ${total}`}</div>
                );
              }

              return <div>{`Item no: ${range[0]}/${total}`}</div>;
            }}
            prevIcon={
              <button className="rc-pagination-item-link">
                <ChevronLeft />
              </button>
            }
            nextIcon={
              <button className="rc-pagination-item-link">
                <ChevronRight />
              </button>
            }
            // jumpNextIcon={
            //   <button className="rc-pagination-item-link">
            //     <ChevronDoubleRight />
            //   </button>
            // }
            // jumpPrevIcon={
            //   <button className="rc-pagination-item-link">
            //     <ChevronDoubleLeft />
            //   </button>
            // }
          />
        ) : null
      }
      emptyText={<div className="no-data">No data</div>}
      {...restProps}
    />
  );
}

const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};

const ChevronRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};

const ChevronLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
};

const ChevronDoubleLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
      <path
        fillRule="evenodd"
        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
};
const ChevronDoubleRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};
