import { RouteObject } from 'react-router'
import {
  Dashboard,
  LoginFlow,
  EmailForm,
  OtpForm,
  Layout,
  Home,
  dashboardLoader,
  AboutUs,
  ContactUs,
  Services,
  Policies,
  Terms,
  TrackShipment,
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
    path: '/terms',
    element: (
      <Layout>
        <Terms />
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
        <TrackShipment />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: <LoginFlow />,
    children: [
      { index: true, element: <EmailForm /> },
      { path: 'otp', element: <OtpForm /> },
    ],
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
