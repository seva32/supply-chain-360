import React from 'react'
import styles from './Login.module.css'

interface EmailInputProps {
  email: string
  setEmail: (email: string) => void
  validateEmail: (email: string) => void
}

export const EmailInput: React.FC<EmailInputProps> = ({
  email,
  setEmail,
  validateEmail,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    validateEmail(value)
  }

  return (
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
      />
    </div>
  )
}
