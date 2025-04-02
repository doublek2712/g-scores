import Sidebar from '../../organisms/sidebar/sidebar'
import Logo from '@assets/images/logo.png'
import NavBar from '../../molecules/nav-bar/nav-bar'
import NavItem from '../../atoms/nav-item/nav-item'
import { FileChartColumnIcon, LayoutDashboardIcon, SearchIcon, Settings2Icon } from 'lucide-react'
import '@styles/main.scss'
import { useLocation } from '@tanstack/react-router'

const WebSidebar = () => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  return (
    <Sidebar logoSrc={Logo}>
      <NavBar>
        <NavItem
          label="Dashboard"
          icon={<LayoutDashboardIcon />}
          href='/'
          state={pathname === '/' ? 'active' : 'idle'}
        />
        <NavItem
          label="Search scores"
          icon={<SearchIcon />}
          href='/search-scores'
          state={pathname === '/search-scores' ? 'active' : 'idle'}
        />
        <NavItem
          label="Reports"
          icon={<FileChartColumnIcon />}
          href='/reports'
          state={pathname === '/reports' ? 'active' : 'idle'}
        />
        <NavItem
          label="Settings"
          icon={<Settings2Icon />}
          href='/settings'
          state={pathname === '/settings' ? 'active' : 'idle'}
        />
      </NavBar>
    </Sidebar>
  )
}

export default WebSidebar