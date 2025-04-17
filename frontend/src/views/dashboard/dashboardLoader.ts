import { LoaderFunctionArgs } from 'react-router'
// import { api } from '../../api'

export async function dashboardLoader({ request }: LoaderFunctionArgs) {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) throw new Response('Unauthorized', { status: 401 })

  return null
}
