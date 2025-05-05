import styles from './Services.module.css'

export default function Services() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div
          className={`${styles.blurCircle} ${styles.hideOnLg}`}
          style={{ top: 0, left: 0 }}
        />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
          <h2 className={styles.heading}>Why Choose Us</h2>
          <p className={styles.subheading}>
            Experience the future of NYC logistics with our tech-driven
            solutions
          </p>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <svg
                  className={styles.icon}
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4644 17.6072L9.71436 20.6072L8.71436 21.6072H16.7144L15.7144 20.6072L14.9644 17.6072M3.71436 13.6072H21.7144M5.71436 17.6072H19.7144C20.2448 17.6072 20.7535 17.3965 21.1286 17.0214C21.5036 16.6463 21.7144 16.1376 21.7144 15.6072V5.60718C21.7144 5.07674 21.5036 4.56804 21.1286 4.19296C20.7535 3.81789 20.2448 3.60718 19.7144 3.60718H5.71436C5.18392 3.60718 4.67521 3.81789 4.30014 4.19296C3.92507 4.56804 3.71436 5.07674 3.71436 5.60718V15.6072C3.71436 16.1376 3.92507 16.6463 4.30014 17.0214C4.67521 17.3965 5.18392 17.6072 5.71436 17.6072Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Real-Time Tracking</h3>
              <p className={styles.cardText}>
                Track your deliveries in real-time with our advanced GPS
                technology and get instant updates.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <svg
                  className={styles.icon}
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7144 10.6072V3.60718L4.71436 14.6072H11.7144V21.6072L20.7144 10.6072H13.7144Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Lightning Fast</h3>
              <p className={styles.cardText}>
                2-hour delivery guarantee within Manhattan and same-day across
                all boroughs.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <svg
                  className={styles.icon}
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.03239 6.92516C4.61452 7.34302 4.28305 7.8391 4.0569 8.38507C3.83075 8.93104 3.71436 9.5162 3.71436 10.1072C3.71436 10.6981 3.83075 11.2833 4.0569 11.8292C4.28305 12.3752 4.61452 12.8713 5.03239 13.2892L12.7144 20.9712L20.3964 13.2892C21.2403 12.4452 21.7144 11.3006 21.7144 10.1072C21.7144 8.91367 21.2403 7.76907 20.3964 6.92516C19.5525 6.08124 18.4079 5.60713 17.2144 5.60713C16.0209 5.60713 14.8763 6.08124 14.0324 6.92516L12.7144 8.24316L11.3964 6.92516C10.9785 6.50729 10.4825 6.17581 9.93648 5.94966C9.39051 5.72351 8.80535 5.60712 8.21439 5.60712C7.62344 5.60712 7.03827 5.72351 6.49231 5.94966C5.94634 6.17581 5.45026 6.50729 5.03239 6.92516Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Eco-Friendly</h3>
              <p className={styles.cardText}>
                100% electric vehicle fleet for sustainable and environmentally
                conscious deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
