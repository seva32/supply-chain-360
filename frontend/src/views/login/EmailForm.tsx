import React, { useState } from 'react'
import { useOutletContext } from 'react-router'
import Button from '../../common/Button'
import styles from './EmailForm.module.css'

export default function EmailForm() {
  const [email, setEmail] = useState<string>('')
  const { handleEmailSubmit, isLoading } = useOutletContext<{
    handleEmailSubmit: (email: string) => void
    isLoading: boolean
  }>()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (!email) {
      alert('Please enter your email address.')
      return
    }
    if (validateEmail(email)) {
      handleEmailSubmit(email)
    } else {
      alert('Please enter a valid email address.')
    }
  }

  const btnLabel = 'Request OTP'
  const buttonIsEnabled = email && validateEmail(email)

  return (
    <form className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className={styles.input}
          value={email}
          onChange={handleChange}
          aria-label="Email input"
          aria-required="true"
          autoComplete="email"
          required
          autoFocus
          onFocus={(e) => e.target.select()}
        />
      </div>
      <Button
        variant="primary"
        size="large"
        disabled={!buttonIsEnabled}
        aria-label={btnLabel}
        onClick={handleButtonClick}
      >
        {isLoading ? 'Loading...' : btnLabel}
      </Button>
    </form>
  )
}
