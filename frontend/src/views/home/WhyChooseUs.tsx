import { StatisticItem } from './StatisticItem'
import styles from './WhyChooseUs.module.css'

const statistics = [
  { value: '99%', description: 'On-Time Delivery' },
  { value: '150+', description: 'Countries Served' },
  { value: '24/7', description: 'Customer Support' },
  { value: '1M+', description: 'Successful Deliveries' },
]

export function WhyChooseUs() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.statsGrid}>
        {statistics.map((stat, index) => (
          <StatisticItem
            key={index}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  )
}
