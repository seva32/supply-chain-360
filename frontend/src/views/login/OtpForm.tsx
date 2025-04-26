import React, { useState } from 'react'
import { useOutletContext } from 'react-router'
import Button from '../../common/Button'
import styles from './OtpForm.module.css'

export default function OtpForm() {
  const [otp, setOtp] = useState<string>('')
  const { handleOtpSubmit, isLoading } = useOutletContext<{
    handleOtpSubmit: (otp: string) => void
    isLoading: boolean
  }>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6)
    setOtp(value)
  }

  const handleButtonClick = (e: React.FormEvent) => {
    e.preventDefault()
    handleOtpSubmit(otp)
  }

  const btnLabel = 'Verify OTP'

  return (
    <form className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="otp" className={styles.label}>
          OTP
        </label>
        <input
          id="otp"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          placeholder="Enter OTP"
          className={styles.input}
          value={otp}
          onChange={handleChange}
          aria-label="OTP input"
          aria-required="true"
          autoComplete="one-time-code"
        />
      </div>
      <Button
        variant="primary"
        size="large"
        disabled={!(otp.length === 6)}
        aria-label={btnLabel}
        onClick={handleButtonClick}
      >
        {isLoading ? 'Loading...' : btnLabel}
      </Button>
    </form>
  )
}
