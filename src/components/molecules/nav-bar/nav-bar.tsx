import React, { FC } from 'react'
import '@styles/main.scss'
interface INavBarProps {
  children?: React.ReactNode
}
const NavBar: FC<INavBarProps> = ({ children, ...rest }) => {
  return (
    <nav className='nav-bar' {...rest}>
      {children}
    </nav>
  )
}

export default NavBar