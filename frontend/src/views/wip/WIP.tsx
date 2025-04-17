import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../common/Button'
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
    return () => clearInterval(interval)
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
          <Button variant="primary" size="medium" onClick={() => navigate('/')}>
            Go Back
          </Button>
          <Button
            variant="secondary"
            size="medium"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WIP
