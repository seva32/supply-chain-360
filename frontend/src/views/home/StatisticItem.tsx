import styles from './StatisticItem.module.css'

interface StatisticItemProps {
  value: string
  description: string
}

export function StatisticItem({ value, description }: StatisticItemProps) {
  return (
    <article>
      <h3 className={styles.statValue}>{value}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
