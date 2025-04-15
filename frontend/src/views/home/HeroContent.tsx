import React from 'react'
import styles from './HeroContent.module.css'
import { ActionButtons } from './ActionButtons'

export function HeroContent() {
  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.heading}>
        Global Logistics Solutions for Modern Business
      </h1>
      <p className={styles.description}>
        Streamline your supply chain with our advanced logistics platform.
        Real-time tracking, efficient delivery, and complete visibility.
      </p>
      <ActionButtons />
    </div>
  )
}
