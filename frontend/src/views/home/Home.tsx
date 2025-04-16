'use client'

import styles from './Home.module.css'
import { HeroContent } from './HeroContent'
import CallToActionSection from './CallToActionSection'
import Services from './Services'
import Testimonials from './Testimonials'

export function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <HeroContent />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f049d15786812537896b9b76a7437e6fc145a2"
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
