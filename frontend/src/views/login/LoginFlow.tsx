import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { api } from '../../api'
import styles from './LoginFlow.module.css'

export default function LoginFlow() {
  const [email, setEmail] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleEmailSubmit = async (emailValue: string) => {
    setEmail(emailValue)
    try {
      setIsLoading(true)
      await api.post('/auth/request-otp', { email: emailValue })
      navigate('otp')
    } catch (error) {
      setEmail('')
      console.error('Failed to request OTP:', error)
      alert('Failed to send OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpSubmit = async (otp: string) => {
    try {
      setIsLoading(true)
      const data = await api.post<
        {
          accessToken: string
          refreshToken: string
          user: object
        },
        { email: string; otp: string }
      >('/auth/verify-otp', { email, otp })

      const { accessToken, refreshToken, user } = data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/dashboard')
    } catch (error) {
      console.error('Failed to verify OTP:', error)
      alert('Failed to verify OTP. Please try again.')
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
