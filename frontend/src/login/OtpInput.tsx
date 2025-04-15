import React from 'react'
import styles from './Login.module.css'

interface OtpInputProps {
  otp: string
  setOtp: (otp: string) => void
}

export const OtpInput: React.FC<OtpInputProps> = ({ otp, setOtp }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6)
    setOtp(value)
  }

  return (
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
  )
}
