import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { api } from '../../api'
import { useAuthStore } from '../../stores/authStore'
import { useNotification } from '../../common/Notification'
import styles from './LoginFlow.module.css'

export default function LoginFlow() {
  const login = useAuthStore((state) => state.login)
  const [email, setEmail] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { showNotification } = useNotification()

  const handleEmailSubmit = async (emailValue: string) => {
    setEmail(emailValue)
    try {
      setIsLoading(true)
      await api.post('/auth/request-otp', { email: emailValue })
      showNotification({
        message: 'OTP sent successfully',
        description: 'Please check your email for the OTP.',
        type: 'SUCCESS',
      })
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
      login(accessToken, refreshToken)
      localStorage.setItem('user', JSON.stringify(user))
      showNotification({
        message: 'Login successful',
        type: 'SUCCESS',
      })
      navigate('/app')
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
