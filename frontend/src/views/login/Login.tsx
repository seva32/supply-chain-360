'use client'
import * as React from 'react'
import { useState } from 'react'
import { EmailInput } from './EmailInput'
import { OtpInput } from './OtpInput'
import { SubmitButton } from './SubmitButton'
import styles from './Login.module.css'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [otp, setOtp] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsEmailValid(emailRegex.test(email))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isEmailValid && otp.length === 6) {
      alert('Form submitted!')
    }
  }

  const buttonIsEnabled = email && isEmailValid && otp.length === 6

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <EmailInput
          email={email}
          setEmail={setEmail}
          validateEmail={validateEmail}
        />
        <OtpInput otp={otp} setOtp={setOtp} />
        <SubmitButton isEnabled={!!buttonIsEnabled} />
      </form>
    </div>
  )
}

export default Login
