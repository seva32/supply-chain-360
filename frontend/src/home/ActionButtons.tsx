import React from 'react'
import styles from './ActionButtons.module.css'

export function ActionButtons() {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.primaryButton}>Get Started</button>
      <button className={styles.secondaryButton}>Learn More</button>
    </div>
  )
}
