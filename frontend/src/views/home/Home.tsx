import styles from './Home.module.css'
import { HeroContent } from './HeroContent'
import CallToActionSection from './CallToActionSection'
import Services from './Services'
import Testimonials from './Testimonials'
import heroImage from '../../assets/heroImage.png'
export function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <HeroContent />
          <img
            src={heroImage}
            alt="Logistics illustration"
            className={styles.heroImage}
          />
        </div>
      </section>
      <Services />
      <Testimonials />
      <CallToActionSection />
    </>
  )
}

export default Home
