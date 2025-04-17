import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'default'
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
  borderless?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'medium',
  icon,
  iconPosition = 'left',
  children,
  className,
  borderless = false,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''} ${borderless ? styles.borderless : ''}`.trim()}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  )
}

export default Button
