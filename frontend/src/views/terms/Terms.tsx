import { useState } from 'react'
import styles from './Terms.module.css'

export default function Terms() {
  const [accepted, setAccepted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.subtitle}>
          Please read these terms carefully before using the portfolio platform
        </p>

        <div className={styles.card}>
          {[
            {
              title: '1. Portfolio Usage',
              content:
                'By using this portfolio platform, you agree to showcase your work responsibly and maintain professional standards. All content must be original or properly credited.',
            },
            {
              title: '2. Content Rights',
              content:
                'You retain all rights to your portfolio content. By uploading, you grant us a non-exclusive license to display your work on our platform.',
            },
            {
              title: '3. Privacy & Data',
              content:
                'We respect your privacy and handle your data according to our privacy policy. Your information will never be shared without consent.',
            },
            {
              title: '4. Account Security',
              content:
                'You are responsible for maintaining the security of your account and password. Contact us immediately if you suspect unauthorized access.',
            },
            {
              title: '5. Termination',
              content:
                'We reserve the right to terminate accounts that violate these terms or engage in unauthorized activities.',
            },
          ].map(({ title, content }, i) => (
            <div key={i} className={styles.section}>
              <h2 className={styles.sectionTitle}>{title}</h2>
              <p className={styles.sectionText}>{content}</p>
            </div>
          ))}

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="accept"
              checked={accepted}
              onChange={() => setAccepted((prev) => !prev)}
              className={styles.checkbox}
            />
            <label htmlFor="accept" className={styles.checkboxLabel}>
              I have read and agree to the Terms and Conditions
            </label>
          </div>

          <button
            className={styles.acceptButton}
            style={{
              backgroundColor: accepted ? '#4318D1' : '#E2E8F0',
              cursor: accepted ? 'pointer' : 'not-allowed',
            }}
            disabled={!accepted}
            onClick={() => setShowModal(true)}
          >
            Accept Terms
          </button>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Terms Accepted</h3>
            <p className={styles.modalText}>
              Thank you for accepting our terms and conditions.
            </p>
            <button
              className={styles.modalButton}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
