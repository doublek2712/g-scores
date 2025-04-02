import { FC, InputHTMLAttributes } from "react"
import '@styles/main.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  left?: React.ReactElement,
  right?: React.ReactElement,
  inline?: boolean,
  fluid?: boolean
}
const Input: FC<IInputProps> = ({ left, right, inline, fluid, ...rest }) => {
  return (
    <div className={`input__container ${inline && 'inline'} ${fluid && 'flex-fluid'}`}>
      <div className="input__left">{left}</div>
      <input className="input" {...rest} />
      <div className="input__right">{right}</div>
    </div>
  )
}

export default Input