import Pagination, { PaginationProps } from 'rc-pagination'
import 'rc-pagination/assets/index.css'
import './RCPagination.scss'

interface IRCPagination
  extends Pick<
    PaginationProps,
    | 'total'
    | 'pageSize'
    | 'current'
    | 'onChange'
    | 'hideOnSinglePage'
    | 'disabled'
  > {}
export function RCPagination({ ...props }: IRCPagination) {
  return (
    <Pagination
      {...props}
      prevIcon={<Prev />}
      nextIcon={<Next />}
      showTitle={false}
      className="custom-rc-pagination"
      showTotal={(total, range) => (
        <div>{`${range[0]} - ${range[1]}/${total}`}</div>
      )}
    />
  )
}

export function Next() {
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
  )
}

export function Prev() {
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
  )
}
