import Button from '../../common/Button'
import styles from './CallToActionSection.module.css'
import { useNavigate } from 'react-router'

function CallToActionSection() {
  const navigate = useNavigate()

  const handleContactUs = () => {
    navigate('/contact')
  }

  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>Ready to Optimize Your Logistics?</h2>
      <p className={styles.description}>
        Join thousands of businesses that trust us with their logistics needs.
        Get started today!
      </p>
      <Button
        variant="secondary"
        size="large"
        onClick={handleContactUs}
        aria-label="Contact Us"
      >
        Contact Us Now
      </Button>
    </section>
  )
}

export default CallToActionSection
