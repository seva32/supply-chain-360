import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import styles from './LoginFlow.module.css'

export default function LoginFlow() {
  const [email, setEmail] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleEmailSubmit = async (emailValue: string) => {
    setEmail(emailValue)
    try {
      setIsLoading(true)
      const response = await fetch('http://localhost:8000/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailValue }),
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      
      navigate('otp')
    } catch (error) {
      console.error('Failed to request OTP:', error)
      setEmail('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpSubmit = async (otp: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(
        'http://localhost:8000/api/auth/verify-otp',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp }),
        },
      )

      if (response.ok) {
        const data = await response.json()
        const { accessToken, refreshToken, user } = data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/dashboard')
      } else {
        navigate('/login')
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error)
      navigate('/login')
    } finally {
      setIsLoading(false)
      setEmail('')
    }
  }

  return (
    <div className={styles.loginContainer}>
      <Outlet
        context={{ email, handleEmailSubmit, handleOtpSubmit, isLoading }}
      />
    </div>
  )
}
