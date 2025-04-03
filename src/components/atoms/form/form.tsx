import { FC, FormHTMLAttributes } from "react"
import '@styles/main.scss'

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
}
const Form: FC<IFormProps> = ({ children, ...rest }) => {
  return (
    <form>
      {children}
    </form>
  )
}

export default Form