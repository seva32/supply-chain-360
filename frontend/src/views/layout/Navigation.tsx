'use client'
import * as React from 'react'
import { Link } from 'react-router'
import Toggle from './Toggle'
import { useAuthStore } from '../../stores/authStore'

import styles from './Navigation.module.css'

function NavigationHeader() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const logout = useAuthStore((state) => state.logout)

  return (
    <header className={styles.headerContainer}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className={styles.logo}>SUPPLY360</h1>
      </Link>
      <nav className={styles.navigation}>
        {isAuthenticated ? (
          <>
            <Link to="/app/dashboard" className={styles.navLink}>
              Dashboard
            </Link>
            <Link to="/track-shipment" className={styles.navLink}>
              Track Shipment
            </Link>
          </>
        ) : (
          <>
            <Link to="/services" className={styles.navLink}>
              Services
            </Link>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
            <Link to="/track-shipment" className={styles.navLink}>
              Track Shipment
            </Link>
          </>
        )}
      </nav>
      <Toggle />
      {isAuthenticated ? (
        <button className={styles.loginButton} onClick={() => logout()}>
          Logout
        </button>
      ) : (
        <Link to="/login" className={styles.loginButton}>
          Login
        </Link>
      )}
    </header>
  )
}

export default NavigationHeader
