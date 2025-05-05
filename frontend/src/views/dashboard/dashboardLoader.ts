import { useAuthStore } from '../../stores/authStore'
import { LoaderFunctionArgs } from 'react-router'
// import { api } from '../../api'

export async function dashboardLoader({ request }: LoaderFunctionArgs) {
  const isAuthenticated = useAuthStore.getState().isAuthenticated

  if (!isAuthenticated) {
    throw new Response('Unauthorized', { status: 401 })
  }

  return null
}
