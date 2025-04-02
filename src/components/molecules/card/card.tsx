import { FC } from "react"
import '@styles/main.scss'

interface ICardProps {
  title: string,
  children?: React.ReactNode
}
const Card: FC<ICardProps> = ({ title, children, ...rest }) => {
  return (
    <div className="card" {...rest}>
      <p>{title}</p>
      {children}
    </div>
  )
}

export default Card