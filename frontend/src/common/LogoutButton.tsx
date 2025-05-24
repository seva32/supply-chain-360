import { useAuthStore } from '../stores/authStore'
import { useNavigate } from 'react-router'

import styles from './LogoutButton.module.css'

export default function Header() {
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
}
