import { useEffect, useRef } from 'react'
import { SuccessIcon, ErrorIcon, CloseIcon } from './NotificationIcons'
import styles from './Notification.module.scss'
import { on } from 'events'

interface Props {
  message: string
  description?: string
  duration?: number
  type: 'SUCCESS' | 'ERROR'
  onClose: () => void
}

const AccessibleNotification = ({ message, description, type, onClose }: Props) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    notificationRef.current?.focus()
  }, [])

  const Icon = type === 'SUCCESS' ? SuccessIcon : ErrorIcon

  return (
    <div
      ref={notificationRef}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={styles['a11y-notification']}
      tabIndex={-1}
    >
      <div className={styles['a11y-notification-message']}>
        <Icon />
        {message}
      </div>
      {description && (
        <div className={styles['a11y-notification-description']}>
          {description}
        </div>
      )}
      <div className={styles['a11y-notification-close-button']}>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close notification"
          type="button"
          className={styles.closeBtn}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}

export default AccessibleNotification
