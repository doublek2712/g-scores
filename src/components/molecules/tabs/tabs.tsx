import { FC } from "react"
import '@styles/main.scss'
import TabItem from "../../atoms/tab-item/tab-item"

interface ITabsProps {
  labels?: string[],
  active: number,
  onChange: Function
}
const Tabs: FC<ITabsProps> = ({ labels, active, onChange, ...rest }) => {

  return (
    <div className="tabs" {...rest}>
      {labels?.map((label, index) => {
        if (index === active) {
          return <TabItem label={label} active onClick={() => onChange(index)} />
        }
        return <TabItem label={label} onClick={() => onChange(index)} />
      })}
    </div>
  )
}

export default Tabs