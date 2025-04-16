import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={`${styles.blurCircle} ${styles.hideOnLg}`} style={{ top: 0, left: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={styles.heading}>Why Choose Us</h2>
          <p className={styles.subheading}>
            Experience the future of NYC logistics with our tech-driven solutions
          </p>
          <div className={styles.cardGrid}>
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <svg className={styles.icon} /* SVG props */>...</svg>
              </div>
              <h3 className={styles.cardTitle}>Real-Time Tracking</h3>
              <p className={styles.cardText}>
                Track your deliveries in real-time with our advanced GPS technology and get instant updates.
              </p>
            </div>
            {/* Repeat for the other two cards */}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.section}>
        <div className={`${styles.blurCircle} ${styles.hideOnLg}`} style={{ top: 0, right: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className={styles.flexWrap}>
            <div style={{ flex: 1 }}>
              <h2 className={styles.heading}>How It Works</h2>
              <p className={styles.subheading}>
                Simple, fast, and efficient delivery process
              </p>
              <div className={styles.stepList}>
                {/* Steps */}
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div>
                    <h3 className={styles.stepTitle}>Book Your Delivery</h3>
                    <p className={styles.stepText}>
                      Schedule your delivery through our app or website. Enter pickup and delivery details.
                    </p>
                  </div>
                </div>
                {/* Repeat 2, 3 */}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <img
                src="https://placehold.co/600x800"
                alt="Delivery Process"
                className={styles.imageShadow}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
