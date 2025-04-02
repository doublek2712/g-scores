import React, { FC } from "react";
import '@styles/main.scss'

interface SidebarProps {
  logoSrc: string
  children: React.ReactNode,
}
const Sidebar: FC<SidebarProps> = ({ logoSrc, children, ...rest }) => {
  return (
    <aside className="sidebar" {...rest}>
      <img id="logo" src={logoSrc} alt="web's logo" />
      {children}
    </aside>
  )
}

export default Sidebar;