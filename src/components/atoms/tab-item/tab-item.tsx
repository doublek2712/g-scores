
import '@styles/main.scss'
import { FC } from 'react'

interface ITabItemProps {
  label: string,
  active?: boolean,
  onClick: () => void
}
const TabItem: FC<ITabItemProps> = ({ label, active = false, onClick, ...rest }) => {
  return (
    <div className={`tab-item ${active && 'tab-item--active'}`} onClick={onClick} {...rest}>
      {label}
    </div>
  )
}
export default TabItem