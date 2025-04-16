import { useState } from 'react'
import styles from './ContactUs.module.css'

export default function ContactUs() {
  const [showCopySuccess, setShowCopySuccess] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setShowCopySuccess(true)
    setTimeout(() => setShowCopySuccess(false), 2000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>Get in touch with our logistics team</p>

        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Customer Support</h2>
            <p className={styles.cardDescription}>
              24/7 assistance for all your shipping needs
            </p>

            <div className={styles.infoGroup}>
              <div className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <PhoneIcon />
                </div>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Phone Number</p>
                  <div className={styles.copyRow}>
                    <p className={styles.contactValue}>+1 (555) 123-4567</p>
                    <button
                      onClick={() => copyToClipboard('+1 (555) 123-4567')}
                      className={styles.copyButton}
                    >
                      <CopyIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <EmailIcon />
                </div>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Email Address</p>
                  <div className={styles.copyRow}>
                    <p className={styles.contactValue}>support@logistics.com</p>
                    <button
                      onClick={() => copyToClipboard('support@logistics.com')}
                      className={styles.copyButton}
                    >
                      <CopyIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Business Hours</h2>
            <p className={styles.cardDescription}>
              When you can reach our team
            </p>

            <div className={styles.infoGroup}>
              <div className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <ClockIcon />
                </div>
                <div>
                  <p className={styles.contactValue}>Monday - Friday</p>
                  <p className={styles.contactLabel}>9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
              <div className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <ClockIcon />
                </div>
                <div>
                  <p className={styles.contactValue}>Saturday</p>
                  <p className={styles.contactLabel}>10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
              <div className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <ClockIcon />
                </div>
                <div>
                  <p className={styles.contactValue}>Sunday</p>
                  <p className={styles.contactLabel}>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Office Location</h2>
          <p className={styles.cardDescription}>Visit our headquarters</p>
          <div className={styles.contactRow}>
            <div className={styles.iconWrapper}>
              <LocationIcon />
            </div>
            <div>
              <p className={styles.officeAddress}>123 Logistics Way</p>
              <p className={styles.officeAddress}>Suite 100</p>
              <p className={styles.officeAddress}>New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>

      {showCopySuccess && (
        <div className={styles.toast}>Copied to clipboard!</div>
      )}
    </div>
  )
}

// Icons
const PhoneIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#0f172a"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 4.5L3 3.75A1.5 1.5 0 014.5 3h3A1.5 1.5 0 019 4.5v2.25M15 3h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0118 9h-2.25M15 21h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0018 15h-2.25M9 21H6a1.5 1.5 0 01-1.5-1.5v-3A1.5 1.5 0 016 15h2.25"
    />
  </svg>
)

const EmailIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#0f172a"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5.25L12 12l9-6.75M21 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75"
    />
  </svg>
)

const CopyIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#475569"
    width="20"
    height="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#0f172a"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const LocationIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#0f172a"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 11.25a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 11.25c0 7.5-7.5 10.5-7.5 10.5S4.5 18.75 4.5 11.25a7.5 7.5 0 1115 0z"
    />
  </svg>
)
