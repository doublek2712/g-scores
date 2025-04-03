import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import WebSidebar from '@components/templates/sidebar/sidebar'
import '@styles/main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='layout-root'>
          <WebSidebar />
          <Outlet />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

      <TanStackRouterDevtools />
    </>
  ),
})