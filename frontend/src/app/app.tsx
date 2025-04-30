import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from '../routes'
import { NotificationProvider } from '../common/Notification'

import './app.module.scss'

export default function App() {
  const router = createBrowserRouter(routes)

  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  )
}
