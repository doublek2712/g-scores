import { FC, LabelHTMLAttributes } from "react"
import '@styles/main.scss'

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}
const Label: FC<ILabelProps> = ({ text, ...rest }) => {
  return (
    <label className="label" {...rest}>{text}</label>
  )
}

export default Label