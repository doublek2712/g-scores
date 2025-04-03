import { FC, TableHTMLAttributes } from "react"
import '@styles/main.scss'

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  minWidth?: number,
  children?: React.ReactNode
}

const Table: FC<ITableProps> = ({ minWidth, children, ...rest }) => {
  return (
    <div className="table__container">
      <div className="table__x-scrollable-container">
        <table
          style={{
            minWidth: minWidth
          }}
          className='table'
          {...rest}>
          {children}
        </table>
      </div>
    </div>

  )
}
export default Table