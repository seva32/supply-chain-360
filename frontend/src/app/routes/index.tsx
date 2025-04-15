import { RouteObject } from 'react-router'
import { Dashboard, Login, Layout, Home, dashboardLoader } from '../../views'
import WIP from '../../views/wip/WIP'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/services',
    element: (
      <Layout>
        <WIP />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <WIP />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <WIP />
      </Layout>
    ),
  },
  {
    path: '/track-shipment',
    element: (
      <Layout>
        <WIP />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: '/logout',
    element: <>Logout</>,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    loader: dashboardLoader,
  },
]
