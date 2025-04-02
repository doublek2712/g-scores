import React, { FC } from 'react'
import '@styles/main.scss'
import { Link } from '@tanstack/react-router'

interface NavItemProps {
  label: string
  icon: React.ReactNode,
  href: string,
  state?: 'idle' | 'active' | 'disabled'
}

const NavItem: FC<NavItemProps> = ({ label, icon, href, state = 'idle', ...rest }) => {
  return (
    <Link className={`nav-item nav-${state}`} {...rest} to={href}>
      {icon}
      {label}
    </Link>
  )
}

export default NavItem
