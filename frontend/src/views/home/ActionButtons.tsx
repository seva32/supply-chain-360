import Button from '../../common/Button'
import styles from './ActionButtons.module.css'

export function ActionButtons() {
  return (
    <div className={styles.buttonGroup}>
      <Button variant="primary" size="large">Get Started</Button>
      <Button variant="secondary" size="large">Learn More</Button>
    </div>
  )
}