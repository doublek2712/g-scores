import React, { FC } from 'react'
import '@styles/main.scss'
interface NavBarProps {
  children?: React.ReactNode
}
const NavBar: FC<NavBarProps> = ({ children, ...rest }) => {
  return (
    <nav className='nav-bar' {...rest}>
      {children}
    </nav>
  )
}

export default NavBar