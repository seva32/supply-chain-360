import React, { useState } from 'react'
import styles from './AboutUs.module.css'

import { FileUploader } from '../../common'

const missionCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V12L16 14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Speed & Reliability',
    description: 'Same-day delivery across the metropolitan area',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 12H18L15 21L9 3L6 12H2"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Real-time Tracking',
    description: 'Advanced tracking for complete visibility',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Smart Optimization',
    description: 'Efficient routing and load management',
  },
]

export default function AboutUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1>About Us</h1>
          <p>
            Your trusted partner in city-wide logistics and delivery solutions
          </p>
        </div>

        <div className={styles.card}>
          <h2>Our Mission</h2>
          <p>
            We're revolutionizing urban logistics by providing fast, reliable,
            and sustainable delivery solutions. Our mission is to connect
            businesses and customers through seamless, technology-driven
            delivery services that make our city more efficient and accessible.
          </p>

          <div className={styles.cardGrid}>
            {missionCards.map((card, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${hoveredIndex === index ? styles.hovered : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={styles.icon}>{card.icon}</div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FileUploader />
    </div>
  )
}
