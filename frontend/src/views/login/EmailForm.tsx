import React, { useState } from 'react'
import { useOutletContext } from 'react-router'

export default function EmailForm() {
  const [emailInput, setEmailInput] = useState<string>('')
  const { handleEmailSubmit } = useOutletContext<{
    handleEmailSubmit: (email: string) => void
  }>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleEmailSubmit(emailInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}
