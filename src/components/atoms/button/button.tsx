import { ButtonHTMLAttributes, FC } from "react"
import '@styles/main.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'subtle' | 'link',
  left?: React.ReactElement,
  right?: React.ReactElement,
  text: string,
}
const Button: FC<IButtonProps> = ({ variant = 'solid', left, right, text, ...rest }) => {
  return (
    <button className={`button button--${variant} button--inline`} {...rest}>
      {left && <div className="button__left">{left}</div>}
      {text}
      {right && <div className="button__right">{right}</div>}
    </button>
  )
}

export default Button