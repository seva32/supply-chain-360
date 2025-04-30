import React, { createContext, useContext, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import AccessibleNotification from './AccessibleNotification'

export const notificationType = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
} as const

type NotificationType = keyof typeof notificationType

interface Notification {
  id: number
  message: string
  description?: string
  duration?: number
  type: NotificationType
}

interface NotificationContextType {
  showNotification: (notification: Omit<Notification, 'id'>) => void
}

const NotificationContext = createContext<NotificationContextType | null>(null)

let idCounter = 0

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const showNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
      const id = idCounter++
      setNotifications((prev) => [...prev, { id, ...notification }])

      setTimeout(
        () => {
          setNotifications((prev) => prev.filter((n) => n.id !== id))
        },
        notification.duration && notification.duration > 5
          ? notification.duration * 1000
          : 5000,
      )
    },
    [],
  )

  const contextValue: NotificationContextType = { showNotification }

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      {ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
          {notifications.map((n) => (
            <AccessibleNotification key={n.id} {...n} />
          ))}
        </div>,
        document.body,
      )}
    </NotificationContext.Provider>
  )
}

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    )
  }
  return context
}
