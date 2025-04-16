import { useState } from 'react'
import styles from './Users.module.css'

function Users() {
  const [users, setUsers] = useState(() => [
    {
      id: 1,
      name: 'Sarah Wilson',
      email: 'sarah.w@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2 hours ago',
      img: 'https://placehold.co/400x400',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '1 day ago',
      img: 'https://placehold.co/400x400',
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.d@example.com',
      role: 'User',
      status: 'Inactive',
      lastLogin: '5 days ago',
      img: 'https://placehold.co/400x400',
    },
    {
      id: 4,
      name: 'James Miller',
      email: 'james.m@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '3 hours ago',
      img: 'https://placehold.co/400x400',
    },
    {
      id: 5,
      name: 'Sofia Garcia',
      email: 's.garcia@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '1 hour ago',
      img: 'https://placehold.co/400x400',
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRole, setSelectedRole] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [showAddUser, setShowAddUser] = useState(false)
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'User' })

  function filterUsers() {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesRole = selectedRole === 'All' || user.role === selectedRole
      const matchesStatus =
        selectedStatus === 'All' || user.status === selectedStatus
      return matchesSearch && matchesRole && matchesStatus
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>User Management</h1>
            <p className={styles.subtitle}>
              Manage user accounts and permissions
            </p>
          </div>
          <button
            className={styles.addUserBtn}
            onClick={() => setShowAddUser(true)}
          >
            <span className={styles.icon}>＋</span>
            <span>Add User</span>
          </button>
        </div>

        <div className={styles.filters}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className={styles.select}
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option>All</option>
            <option>Admin</option>
            <option>User</option>
          </select>
          <select
            className={styles.select}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterUsers().map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className={styles.userCell}>
                      <img
                        className={styles.avatar}
                        src={user.img}
                        alt={user.name}
                      />
                      <div>
                        <p className={styles.name}>{user.name}</p>
                        <p className={styles.email}>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={
                        user.role === 'Admin'
                          ? styles.adminRole
                          : styles.userRole
                      }
                    >
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        user.status === 'Active'
                          ? styles.activeStatus
                          : styles.inactiveStatus
                      }
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <span className={styles.lastLogin}>{user.lastLogin}</span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.editBtn}>
                        <span role="img" aria-label="Edit">✏️</span>
                      </button>
                      <button className={styles.deleteBtn}>🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddUser && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h2>Add New User</h2>
                <button onClick={() => setShowAddUser(false)}>
                  <span role="img" aria-label="Close">✖️</span>
                </button>
              </div>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <label>Role</label>
                <select
                  className={styles.select}
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                >
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className={styles.modalActions}>
                <button onClick={() => setShowAddUser(false)}>Cancel</button>
                <button>Add User</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
