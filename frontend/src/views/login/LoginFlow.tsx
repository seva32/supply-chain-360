import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

export default function LoginFlow() {
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()

  const handleEmailSubmit = async (email: string) => {
    setEmail(email)
    try {
      // Call backend to request OTP
      await fetch('/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      navigate('otp') // Navigate to OTP form
    } catch (error) {
      console.error('Failed to request OTP:', error)
    }
  }

  const handleOtpSubmit = async (otp: string) => {
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })

      if (response.ok) {
        navigate('/dashboard') // Redirect to dashboard on success
      } else {
        navigate('/login') // Redirect to email form on failure
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error)
      navigate('/login') // Redirect to email form on failure
    }
  }

  return <Outlet context={{ email, handleEmailSubmit, handleOtpSubmit }} />
}
