import React, { useState } from 'react'
import { useOutletContext } from 'react-router'

export default function OtpForm() {
  const [otpInput, setOtpInput] = useState<string>('')
  const { handleOtpSubmit } = useOutletContext<{
    handleOtpSubmit: (otp: string) => void
  }>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleOtpSubmit(otpInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="otp">OTP</label>
      <input
        id="otp"
        type="text"
        value={otpInput}
        onChange={(e) => setOtpInput(e.target.value)}
        required
      />
      <button type="submit">Verify</button>
    </form>
  )
}
