'use client'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <>
      <section className={styles.container}>Hi</section>
      <footer className={styles.footerContainer} role="contentinfo">
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            © 2024 LogisticsPro. All rights reserved.
          </p>
          <nav className={styles.legalNav} aria-label="Legal links">
            <a
              href="/privacy-policy"
              className={styles.legalLink}
              onClick={(e) => {
                e.preventDefault()
                // Handle navigation to privacy policy
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className={styles.legalLink}
              onClick={(e) => {
                e.preventDefault()
                // Handle navigation to terms of service
              }}
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer
