import { FC } from "react"
import '@styles/main.scss'

interface ITabsProps {
  children?: React.ReactNode
}
const Tabs: FC<ITabsProps> = ({ children, ...rest }) => {
  return (
    <div className="tabs" {...rest}>
      {children}
    </div>
  )
}

export default Tabs