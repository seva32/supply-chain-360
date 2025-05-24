'use client'
import { useState } from 'react'
import Overview from './overview/Overview'
import Users from './users/Users'
import styles from './Dashboard.module.css'
import Shipments from './shipments/Shipments'
import Invoices from './invoices/Invoices'
import { Link } from 'react-router'
import LogoutButton from '../../common/LogoutButton'
import Logo from '../../assets/logo.svg'
import OverviewIcon from '../../assets/overview.svg'
import UsersIcon from '../../assets/users.svg'
import ShipmentsIcon from '../../assets/shipments.svg'
import InvoicesIcon from '../../assets/invoices.svg'

const menuItems = [
  {
    key: 'overview',
    label: 'Overview',
    icon: OverviewIcon,
    submenus: [
      { label: 'Overview Item 1', href: '#' },
      { label: 'Overview Item 2', href: '#' },
    ],
  },
  {
    key: 'users',
    label: 'Users',
    icon: UsersIcon,
    submenus: [
      { label: 'All Users', href: '#' },
      { label: 'Add User', href: '#' },
    ],
  },
  {
    key: 'shipments',
    label: 'Shipments',
    icon: ShipmentsIcon,
    submenus: [
      { label: 'All Shipments', href: '#' },
      { label: 'Create Shipment', href: '#' },
    ],
  },
  {
    key: 'invoices',
    label: 'Invoices',
    icon: InvoicesIcon,
    submenus: [
      { label: 'All Invoices', href: '#' },
      { label: 'Create Invoice', href: '#' },
    ],
  },
]

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

  const renderContent = () => {
    switch (activeMenu) {
      case 'overview':
        return <Overview />
      case 'users':
        return <Users />
      case 'shipments':
        return <Shipments />
      case 'invoices':
        return <Invoices />
      default:
        return <div>Select a menu to view content</div>
    }
  }

  return (
    <div className={styles.app}>
      <div
        className={styles.sidebar}
        style={{ width: sidebarOpen ? '280px' : '64px' }}
      >
        <div className={styles.sidebarHeader}>
          <Link to="/" className={styles.logoLink}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            {/* <Logo /> */}
          </Link>
          <span className={styles.logoText} hidden={!sidebarOpen}>
            Dashboard
          </span>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((menu) => (
            <div className={styles.navGroup} key={menu.key}>
              <button
                className={styles.navButton}
                onClick={() => toggleMenu(menu.key)}
                style={{
                  background: activeMenu === menu.key ? '#334155' : undefined,
                }}
                aria-expanded={activeMenu === menu.key}
              >
                <img
                  src={menu.icon}
                  alt=""
                  className={`${styles.iconPlaceholder} ${
                    activeMenu === menu.key ? styles.activeIcon : ''
                  }`}
                />
                <span className={styles.menuText} hidden={!sidebarOpen}>
                  {menu.label}
                </span>
              </button>
              {sidebarOpen &&
              activeMenu === menu.key &&
              menu.submenus?.length ? (
                <div className={styles.subMenu}>
                  {menu.submenus.map((submenu, idx) => (
                    <a
                      className={styles.subMenuItem}
                      href={submenu.href}
                      key={idx}
                    >
                      {submenu.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <LogoutButton />
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

        <main className={styles.content}>{renderContent()}</main>
      </div>
    </div>
  )
}

export default Dashboard
