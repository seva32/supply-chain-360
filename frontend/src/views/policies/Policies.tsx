import { useState } from 'react'
import styles from './Policies.module.css'

function Policies() {
  const [accepted, setAccepted] = useState(false)

  const [sections, setSections] = useState({
    privacy: false,
    copyright: false,
    conduct: false,
    contact: false,
  })

  function toggleSection(section: keyof typeof sections) {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio Policies</h1>
      <p className={styles.subtitle}>
        Important information about how this portfolio operates and protects
        your interests
      </p>
      <div className={styles.card}>
        <div className={styles.accordion}>
          {[
            {
              key: 'privacy',
              label: 'Privacy Policy',
              items: [
                "Personal information collected is limited to what's necessary for portfolio functionality",
                'Your data is never sold to third parties',
                'Analytics are used only to improve user experience',
                'You can request data deletion at any time',
              ],
            },
            {
              key: 'copyright',
              label: 'Copyright & Usage',
              items: [
                'All portfolio work is protected by copyright law',
                'Visitors may view but not reproduce content',
                'Attribution is required for any permitted use',
                'Commercial use requires written permission',
              ],
            },
            {
              key: 'conduct',
              label: 'Code of Conduct',
              items: [
                'Respectful communication is required',
                'No harassment or discriminatory behavior',
                'Spam and solicitation are prohibited',
                'Violations may result in access restriction',
              ],
            },
            {
              key: 'contact',
              label: 'Contact & Support',
              items: [
                'Support requests are answered within 24 hours',
                'Business inquiries via contact form only',
                'Emergency contact available for security issues',
                'Feedback and suggestions are welcome',
              ],
            },
          ].map((section) => (
            <div key={section.key} className={styles.section}>
              <div
                className={styles.sectionHeader}
                onClick={() =>
                  toggleSection(section.key as keyof typeof sections)
                }
              >
                <h2 className={styles.sectionTitle}>{section.label}</h2>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.chevron}
                  style={{
                    transform: sections[section.key as keyof typeof sections]
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  }}
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="#64748B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {sections[section.key as keyof typeof sections] && (
                <div className={styles.sectionContent}>
                  {section.items.map((item, index) => (
                    <p key={index} className={styles.item}>
                      • {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label className={styles.checkboxLabel}>
            I acknowledge that I have read and understood these policies
          </label>
        </div>

        <button
          className={styles.button}
          onClick={() => setAccepted(false)}
          style={{
            backgroundColor: accepted ? '#4318D1' : '#E2E8F0',
            cursor: accepted ? 'pointer' : 'not-allowed',
          }}
        >
          Acknowledge Policies
        </button>
      </div>
    </div>
  )
}

export default Policies
