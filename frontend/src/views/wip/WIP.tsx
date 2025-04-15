'use client'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import styles from './WIP.module.css'

function WIP() {
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 60) {
          clearInterval(interval)
          return 60
        }
        return prev + 1
      })
    }, 50)
    return () => clearInterval(interval) // Cleanup on component unmount
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <img
          src="https://placehold.co/120x120"
          alt="Construction Icon"
          className={styles.image}
        />
        <h1 className={styles.heading}>Under Construction</h1>
        <p className={styles.description}>
          We're working hard to bring you something amazing. Please check back
          soon.
        </p>
        <div className={styles.progressBarWrapper}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className={styles.progressText}>{progress + '% Complete'}</p>
        <div className={styles.buttonGroup}>
          <button
            className={styles.primaryButton}
            onClick={() => navigate('/')}
          >
            Go Back
          </button>
          <button
            className={styles.secondaryButton}
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default WIP
