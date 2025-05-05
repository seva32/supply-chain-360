import { useRouteError, isRouteErrorResponse } from 'react-router'

export default function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      return (
        <div>
          <h1>Unauthorized</h1>
          <p>You are not authorized to view this page. Please log in.</p>
          <a href="/login">Go to Login</a>
        </div>
      )
    }

    if (error.status === 404) {
      return (
        <div>
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred.</p>
    </div>
  )
}
