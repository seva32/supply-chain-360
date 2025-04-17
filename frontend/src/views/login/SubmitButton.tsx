import React from 'react'
import Button from '../../common/Button'

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
    <Button
      variant="primary"
      size="large"
      disabled={!isEnabled}
      aria-label={label}
    >
      {isLoading ? 'Loading...' : label}
    </Button>
  )
}
