import { useState } from 'react'
import styles from './Services.module.css'

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      name: 'Same Day Delivery',
      description: 'Get your packages delivered within hours across the city',
      icon: 'https://placehold.co/40x40',
      features: [
        '2-4 hour delivery window',
        'Real-time tracking',
        'Signature confirmation',
      ],
    },
    {
      id: 2,
      name: 'Express Courier',
      description: 'Dedicated courier service for urgent deliveries',
      icon: 'https://placehold.co/40x40',
      features: [
        'Direct point-to-point',
        'Priority handling',
        'Insurance included',
      ],
    },
    {
      id: 3,
      name: 'Multi-Drop Routes',
      description: 'Efficient delivery routes for multiple packages',
      icon: 'https://placehold.co/40x40',
      features: ['Optimized routing', 'Bulk pricing', 'Scheduled deliveries'],
    },
    {
      id: 4,
      name: 'Specialized Transport',
      description: 'Custom solutions for unique delivery needs',
      icon: 'https://placehold.co/40x40',
      features: [
        'Temperature control',
        'Fragile handling',
        'Extra care service',
      ],
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.subtitle}>
          Comprehensive logistics solutions for your business
        </p>
        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.id}
              className={`${styles.card} ${
                selectedService === service.id ? styles.cardHovered : ''
              }`}
              onMouseEnter={() => setSelectedService(service.id)}
              onMouseLeave={() => setSelectedService(null)}
            >
              <div className={styles.cardContent}>
                <img
                  src={service.icon}
                  alt="Service icon"
                  className={styles.icon}
                />
                <div className={styles.info}>
                  <h3 className={styles.cardTitle}>{service.name}</h3>
                  <p className={styles.description}>{service.description}</p>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <button
                  className={`${styles.button} ${
                    selectedService === service.id ? styles.buttonHovered : ''
                  }`}
                  onClick={() => alert('Service selected: ' + service.name)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const CheckIcon = () => (
  <svg
    className={styles.checkIcon}
    viewBox="0 0 20 20"
    fill="currentColor"
    width="16"
    height="16"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)
