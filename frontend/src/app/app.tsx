import Home from '../home/Home'
import Login from '../login/Login'
import Layout from '../layout/Layout'
import Dashboard from '../dashboard/Dashboard'

import './app.module.scss'

export function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Login /> */}
      <Dashboard />
    </Layout>
  )
}

export default App
