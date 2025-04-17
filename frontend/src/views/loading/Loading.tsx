import styles from './Loading.module.css'

export function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.spinner} />
        <div className={styles.textGroup}>
          <h1 className={styles.heading}>Loading Your Content</h1>
          <p className={styles.subtext}>
            Please wait while we fetch your data...
          </p>
        </div>
      </div>
    </div>
  )
}
