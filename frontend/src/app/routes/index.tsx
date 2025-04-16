import { RouteObject } from 'react-router'
import {
  Dashboard,
  Login,
  Layout,
  Home,
  dashboardLoader,
  AboutUs,
  ContactUs,
  Services,
  Policies,
} from '../../views'
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
        <Services />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: '/policies',
    element: (
      <Layout>
        <Policies />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <ContactUs />
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
