import Paginate from 'react-paginate'
import 'react-paginate/theme/basic/react-paginate.css'

export function ReactPaginate() {
  return (
    <Paginate
      pageCount={20}
      className="react-paginate"
      pageRangeDisplayed={5}
    />
  )
}
