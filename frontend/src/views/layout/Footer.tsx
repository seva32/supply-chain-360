import * as React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [hover, setHover] = React.useState<string | null>(null)

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <div className={styles.section}>
              <div className={styles.logo}>
                <img
                  src="https://placehold.co/40x40"
                  alt="Logo"
                  className={styles.logoImage}
                />
                <span className={styles.logoText}>Supply360</span>
              </div>
              <p className={styles.description}>
                Your trusted partner in global logistics and supply chain
                solutions. Delivering excellence since 1995.
              </p>
              <div className={styles.socials}>
                {['twitter', 'linkedin', 'facebook'].map((platform) => (
                  <button
                    key={platform}
                    onMouseEnter={() => setHover(platform)}
                    onMouseLeave={() => setHover(null)}
                    className={styles.socialButton}
                    style={{
                      background: hover === platform ? '#4318D1' : undefined,
                      transform:
                        hover === platform ? 'translateY(-1px)' : undefined,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {platform === 'twitter' && (
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      )}
                      {platform === 'linkedin' && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      )}
                      {platform === 'facebook' && (
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      )}
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Services</h3>
              {['freight', 'warehouse', 'customs', 'supply'].map((item) => (
                <a
                  key={item}
                  onMouseEnter={() => setHover(item)}
                  onMouseLeave={() => setHover(null)}
                  className={styles.link}
                  style={{ color: hover === item ? '#4318D1' : undefined }}
                  href={item
                    .replace('freight', '/services')
                    .replace('warehouse', '/services')
                    .replace('customs', '/services')
                    .replace('supply', '/services')}
                >
                  {item
                    .replace('freight', 'Freight Forwarding')
                    .replace('warehouse', 'Warehousing')
                    .replace('customs', 'Customs Clearance')
                    .replace('supply', 'Supply Chain')}
                </a>
              ))}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Company</h3>
              {['about', 'careers', 'news', 'contact'].map((item) => (
                <a
                  key={item}
                  onMouseEnter={() => setHover(item)}
                  onMouseLeave={() => setHover(null)}
                  className={styles.link}
                  style={{ color: hover === item ? '#4318D1' : undefined }}
                  href={item
                    .replace('about', '/about')
                    .replace('careers', '/careers')
                    .replace('news', '/news')
                    .replace('contact', '/contact')}
                >
                  {item
                    .replace('about', 'About Us')
                    .replace('careers', 'Careers')
                    .replace('news', 'News')
                    .replace('contact', 'Contact')}
                </a>
              ))}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Contact Us</h3>
              <p className={styles.text}>
                <span>123 Logistics Way</span>
                <br />
                <span>Business District</span>
                <br />
                <span>New York, NY 10001</span>
              </p>
              <p className={styles.text}>
                <span>Tel: (55E) 123-4567</span>
                <br />
                <span>Email: info@supplychain360.com</span>
              </p>
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.text}>
              © 2025 SupplyChain360. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              {['privacy', 'terms', 'cookies'].map((item) => (
                <a
                  key={item}
                  onMouseEnter={() => setHover(item)}
                  onMouseLeave={() => setHover(null)}
                  className={styles.link}
                  style={{ color: hover === item ? '#4318D1' : undefined }}
                  href={item
                    .replace('privacy', '/policies')
                    .replace('terms', '/terms')
                    .replace('cookies', '/terms')}
                >
                  {item
                    .replace('privacy', 'Privacy Policy')
                    .replace('terms', 'Terms of Service')
                    .replace('cookies', 'Cookie Policy')}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
