'use client'
import { useState } from 'react'
import styles from './Dashboard.module.css'

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New user registered' },
    { id: 2, text: 'Server maintenance scheduled' },
    { id: 3, text: 'New order received' },
  ])
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu))
  }

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
    if (sidebarOpen && activeMenu) {
      setActiveMenu(null) // Close all menus when sidebar is closed
    } else {
      setActiveMenu('dashboard') // Open the dashboard menu when sidebar is opened
    }
  }

  return (
    <div className={styles.app}>
      <div
        className={styles.sidebar}
        style={{ width: sidebarOpen ? '280px' : '64px' }}
      >
        <div className={styles.sidebarHeader}>
          <img
            src="https://placehold.co/32x32"
            alt="Logo"
            className={styles.logo}
          />
          <span className={styles.logoText} hidden={!sidebarOpen}>
            Dashboard
          </span>
        </div>

        <nav className={styles.nav}>
          {['dashboard', 'users', 'settings'].map((menu) => (
            <div className={styles.navGroup} key={menu}>
              <button
                className={styles.navButton}
                onClick={() => toggleMenu(menu)}
                style={{
                  background: activeMenu === menu ? '#334155' : undefined,
                }}
                aria-expanded={activeMenu === menu}
              >
                <span className={styles.iconPlaceholder}></span>
                <span className={styles.menuText} hidden={!sidebarOpen}>
                  {menu[0].toUpperCase() + menu.slice(1)}
                </span>
              </button>
              {!(sidebarOpen && activeMenu === menu) ? null : (
                <div className={styles.subMenu}>
                  <a className={styles.subMenuItem} href="#">
                    Item 1
                  </a>
                  <a className={styles.subMenuItem} href="#">
                    Item 2
                  </a>
                  <a className={styles.subMenuItem} href="#">
                    Item 3
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.leftSection}>
            <button
              className={styles.headerButton}
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <span className={styles.iconPlaceholder}></span>
            </button>

            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
              />
              <span className={styles.searchIcon}></span>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.notifications}>
              <button
                className={styles.headerButton}
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                aria-label="Toggle Notifications"
              >
                <span className={styles.iconPlaceholder}></span>
              </button>
              <div
                className={styles.notificationsDropdown}
                hidden={!notificationsOpen}
              >
                <div className={styles.notificationsHeader}>
                  <h3>Notifications</h3>
                </div>
                <div className={styles.notificationsList}>
                  {notifications.map((n) => (
                    <div className={styles.notificationItem} key={n.id}>
                      <p>{n.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.userInfo}>
              <img
                src="https://placehold.co/32x32"
                alt="User"
                className={styles.avatar}
              />
              <span>John Doe</span>
            </div>
          </div>
        </header>

        <main className={styles.content}>
          <h1 className={styles.pageTitle}>Dashboard Overview</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Total Users</h3>
              <p>1,234</p>
            </div>
            <div className={styles.card}>
              <h3>Revenue</h3>
              <p>$45,678</p>
            </div>
            <div className={styles.card}>
              <h3>Sessions</h3>
              <p>8,421</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
