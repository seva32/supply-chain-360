'use client'
import * as React from 'react'
import styles from './Navigation.module.css'

function NavigationHeader() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.logo}>LogisticsPro</h1>
      <nav className={styles.navigation}>
        <button className={styles.navLink}>Services</button>
        <button className={styles.navLink}>About</button>
        <button className={styles.navLink}>Contact</button>
        <button className={styles.navLink}>Track Shipment</button>
      </nav>
      <button className={styles.loginButton}>Login</button>
    </header>
  )
}

export default NavigationHeader
