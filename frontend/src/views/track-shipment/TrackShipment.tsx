import * as React from 'react'
import styles from './TrackShipment.module.css'

const trackingHistory = [
  {
    time: '2024-01-19 10:45',
    description: 'Out for delivery',
  },
  {
    time: '2024-01-19 09:15',
    description: 'Arrived at Chicago Distribution Center',
  },
  {
    time: '2024-01-18 14:30',
    description: 'Package departed from Los Angeles Hub',
  },
]

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] =
    React.useState('1Z999AA1234567890')

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Track Your Package</h1>
          <p className={styles.subtitle}>
            Enter your tracking number to get real-time updates on your delivery
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              className={styles.input}
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button className={styles.trackButton}>Track</button>
          </div>

          <div className={styles.statusCard} style={{ marginTop: '32px' }}>
            <div className={styles.statusColumn}>
              <span className={styles.statusLabel}>Status</span>
              <span className={styles.statusValue}>In Transit</span>
            </div>
            <div className={styles.statusColumn}>
              <span className={styles.statusLabel}>Current Location</span>
              <span className={styles.locationValue}>
                Chicago Distribution Center
              </span>
            </div>
            <div className={styles.statusColumn}>
              <span className={styles.statusLabel}>Estimated Delivery</span>
              <span className={styles.etaValue}>2024-01-20</span>
            </div>
          </div>

          <div className={styles.history}>
            <h3 className={styles.historyTitle}>Tracking History</h3>
            <div className={styles.historyList}>
              {trackingHistory.map((item, idx) => (
                <div className={styles.historyItem} key={idx}>
                  <div className={styles.historyDot} />
                  <div className={styles.historyInfo}>
                    <span className={styles.historyTime}>{item.time}</span>
                    <span className={styles.historyText}>
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
