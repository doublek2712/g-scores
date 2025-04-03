import { FC } from "react"
import '@styles/main.scss'

interface ITabItemProps {
  label: string,
  active?: boolean
}
const TabItem: FC<ITabItemProps> = ({ label, active = false, ...rest }) => {
  return (
    <div className={`tab-item ${active && 'tab-item--active'}`} {...rest}>
      {label}
    </div>
  )
}
export default TabItem