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
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33203 4.80772C3.33203 3.88724 4.07822 3.14105 4.9987 3.14105H7.7314C8.09009 3.14105 8.40854 3.37058 8.52196 3.71086L9.77011 7.45539C9.90128 7.84882 9.7232 8.27881 9.35228 8.46428L7.47121 9.4048C8.38974 11.4421 10.031 13.0834 12.0683 14.0019L13.0088 12.1208C13.1943 11.7499 13.6243 11.5718 14.0177 11.703L17.7622 12.9511C18.1025 13.0646 18.332 13.383 18.332 13.7417V16.4744C18.332 17.3949 17.5859 18.1411 16.6654 18.1411H15.832C8.92847 18.1411 3.33203 12.5446 3.33203 5.64105V4.80772Z"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const EmailIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33203 7.30774L9.90753 11.6914C10.4674 12.0647 11.1967 12.0647 11.7565 11.6914L18.332 7.30774M4.9987 16.4744H16.6654C17.5859 16.4744 18.332 15.7282 18.332 14.8077V6.47441C18.332 5.55393 17.5859 4.80774 16.6654 4.80774H4.9987C4.07822 4.80774 3.33203 5.55393 3.33203 6.47441V14.8077C3.33203 15.7282 4.07822 16.4744 4.9987 16.4744Z"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    stroke="white"
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
    stroke="white"
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
