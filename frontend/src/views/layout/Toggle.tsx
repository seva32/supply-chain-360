import { useState } from 'react'
import { Link } from 'react-router'
import { useAuthStore } from '../../stores/authStore'

import styles from './Toggle.module.css'

function Toggle() {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const logout = useAuthStore((state) => state.logout)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.toggleContainer}>
      <button
        className={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        aria-expanded={isOpen} // Accessibility: Indicates if the menu is open
        aria-label="Toggle menu"
      >
        <div className={styles.iconWrapper}>
          <div
            className={styles.squareTopLeft}
            style={{
              transform: isOpen
                ? 'translateX(-150%)'
                : isHovered
                  ? 'translateY(-3px)'
                  : 'scale(0.8) translateY(3px) translateX(-3px)',
            }}
          />
          <div
            className={styles.crossLine}
            style={{
              transform: isOpen
                ? 'translate(-50%, -50%) rotate(45deg) scale(1.2)'
                : 'translate(-50%, -50%) rotate(0) scale(0)',
              opacity: isOpen ? 1 : 0,
            }}
          />
          <div
            className={styles.crossLine}
            style={{
              transform: isOpen
                ? 'translate(-50%, -50%) rotate(-45deg) scale(1.2)'
                : 'translate(-50%, -50%) rotate(0) scale(0)',
              opacity: isOpen ? 1 : 0,
            }}
          />
          <div
            className={styles.squareBottomRight}
            style={{
              transform: isOpen
                ? 'translateY(150%)'
                : isHovered
                  ? 'translateY(0)'
                  : 'scale(0.8) translateY(0px) translateX(0px)',
            }}
          />
          <div
            className={styles.squareBottomRight}
            style={{
              transform: isOpen
                ? 'translateX(150%)'
                : isHovered
                  ? 'translateY(3px)'
                  : 'scale(0.8) translateY(-3px) translateX(3px)',
            }}
          />
        </div>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {isAuthenticated ? (
              <>
                <li className={styles.menuItem}>
                  <Link to="/app/dashboard" className={styles.menuLink}>
                    Dashboard
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link to="/track-shipment" className={styles.menuLink}>
                    Track Shipment
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <button onClick={() => logout()} className={styles.menuLink}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className={styles.menuItem}>
                  <Link to="/services" className={styles.menuLink}>
                    Services
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link to="/about" className={styles.menuLink}>
                    About
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link to="/contact" className={styles.menuLink}>
                    Contact
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link to="/login" className={styles.menuLink}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Toggle
