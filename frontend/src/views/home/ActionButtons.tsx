import Button from '../../common/Button'
import styles from './ActionButtons.module.css'
import { useNavigate } from 'react-router'

export function ActionButtons() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/login')
  }
  const handleLearnMore = () => {
    navigate('/about')
  }

  return (
    <div className={styles.buttonGroup}>
      <Button variant="primary" size="large" onClick={handleGetStarted}>
        Get Started
      </Button>
      <Button
        variant="secondary"
        size="large"
        borderless
        onClick={handleLearnMore}
      >
        Learn More
      </Button>
    </div>
  )
}
