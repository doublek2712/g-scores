import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import WebSidebar from '@components/templates/sidebar/sidebar'
import '@styles/main.scss'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='layout-root'>
        <WebSidebar />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})