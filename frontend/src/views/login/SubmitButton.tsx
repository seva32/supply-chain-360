import React from 'react'
import styles from './Login.module.css'

interface SubmitButtonProps {
  isLoading?: boolean
  label?: string
  isEnabled?: boolean
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading = false,
  label = 'Submit',
  isEnabled,
}) => {
  return (
    <button
      type="submit"
      className={styles.submitButton}
      disabled={!isEnabled}
      aria-disabled={!isEnabled}
    >
      {isLoading ? 'Loading...' : label}
    </button>
  )
}
