import styles from './HowItWorks.module.css'
import containers from '../../assets/containers.png'

function HowItWorks() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>How It Works</h2>
        <div className={styles.contentLayout}>
          <div className={styles.imageContainer}>
            <img
              src={containers}
              alt="Logistics illustration"
              className={styles.image}
            />
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.stepsList}>
              <article className={styles.stepCard}>
                <span className={styles.stepLabel}>Step 1</span>
                <h3 className={styles.stepTitle}>Route Planning</h3>
                <p className={styles.stepDescription}>
                  Optimize your delivery routes with our advanced algorithm that
                  considers traffic, distance, and delivery windows.
                </p>
              </article>
              <article className={styles.stepCard}>
                <span className={styles.stepLabel}>Step 2</span>
                <h3 className={styles.stepTitle}>Driver Assignment</h3>
                <p className={styles.stepDescription}>
                  Automatically assign the most suitable drivers based on their
                  availability, location, and expertise.
                </p>
              </article>
              <article className={styles.stepCard}>
                <span className={styles.stepLabel}>Step 3</span>
                <h3 className={styles.stepTitle}>Real-time Tracking</h3>
                <p className={styles.stepDescription}>
                  Monitor deliveries in real-time with our advanced tracking
                  system that provides instant updates and notifications.
                </p>
              </article>
              <article className={styles.stepCard}>
                <span className={styles.stepLabel}>Step 4</span>
                <h3 className={styles.stepTitle}>Delivery Confirmation</h3>
                <p className={styles.stepDescription}>
                  Secure digital proof of delivery with electronic signatures
                  and photo confirmation for complete transparency.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
