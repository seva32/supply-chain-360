import Button from '../../common/Button'
import styles from './CallToActionSection.module.css'

function CallToActionSection() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>Ready to Optimize Your Logistics?</h2>
      <p className={styles.description}>
        Join thousands of businesses that trust us with their logistics needs.
        Get started today!
      </p>
      <Button
        variant="primary"
        size="large"
        onClick={() => {
          // Handle contact action
        }}
        aria-label="Contact Us"
      >
        Contact Us Now
      </Button>
    </section>
  )
}

export default CallToActionSection
