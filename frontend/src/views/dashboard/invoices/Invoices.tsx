import React, { useState } from 'react'
import styles from './Invoices.module.css'

interface Invoice {
  id: string
  customer: string
  amount: number
  date: string
  status: 'paid' | 'pending' | 'overdue'
  email: string
}

const Invoices: React.FC = () => {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortField, setSortField] = useState<keyof Invoice>('date')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  const [invoices] = useState<Invoice[]>([
    {
      id: 'INV20240116',
      customer: 'Sarah Wilson',
      amount: 245.5,
      date: '2024-01-16',
      status: 'paid',
      email: 'sarah.w@email.com',
    },
    {
      id: 'INV20240115',
      customer: 'Michael Chen',
      amount: 189.99,
      date: '2024-01-15',
      status: 'pending',
      email: 'michael.c@email.com',
    },
    {
      id: 'INV20240114',
      customer: 'Emma Davis',
      amount: 324.75,
      date: '2024-01-14',
      status: 'overdue',
      email: 'emma.d@email.com',
    },
    {
      id: 'INV20240113',
      customer: 'James Miller',
      amount: 156.25,
      date: '2024-01-13',
      status: 'paid',
      email: 'james.m@email.com',
    },
    {
      id: 'INV20240112',
      customer: 'Sofia Garcia',
      amount: 278.5,
      date: '2024-01-12',
      status: 'pending',
      email: 'sofia.g@email.com',
    },
  ])

  const toggleSort = (field: keyof Invoice) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const toggleAllInvoices = () => {
    if (selectedInvoices.length === invoices.length) {
      setSelectedInvoices([])
    } else {
      setSelectedInvoices(invoices.map((inv) => inv.id))
    }
  }

  const getStatusColor = (status: Invoice['status']) => {
    const colors: Record<Invoice['status'], { bg: string; text: string }> = {
      paid: { bg: 'rgba(34, 197, 94, 0.08)', text: '#22C55E' },
      pending: { bg: 'rgba(67, 24, 209, 0.08)', text: '#4318D1' },
      overdue: { bg: 'rgba(239, 68, 68, 0.08)', text: '#EF4444' },
    }
    return colors[status]
  }

  const filteredInvoices = invoices
    .filter((inv) => {
      const lower = searchQuery.toLowerCase()
      return (
        inv.id.toLowerCase().includes(lower) ||
        inv.customer.toLowerCase().includes(lower) ||
        inv.email.toLowerCase().includes(lower)
      )
    })
    .sort((a, b) => {
      const valA = a[sortField]
      const valB = b[sortField]
      if (valA < valB) return sortDirection === 'asc' ? -1 : 1
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Invoice Management</h1>
            <p className={styles.subtitle}>
              View and manage all customer invoices
            </p>
          </div>
          <button
            className={styles.createButton}
            onClick={() => alert('Create Invoice clicked')}
          >
            <svg width="20" height="20" viewBox="0 0 21 21" fill="none">
              <path
                d="M10.0807 3.70102V17.0344M16.7474 10.3677H3.41406"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Create Invoice</span>
          </button>
        </div>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search invoices..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.tableHeader}>
            <input
              type="checkbox"
              checked={selectedInvoices.length === invoices.length}
              onChange={toggleAllInvoices}
            />
            <div className={styles.gridHeader}>
              <div onClick={() => toggleSort('id')}>Invoice ID</div>
              <div onClick={() => toggleSort('customer')}>Customer</div>
              <div>Email</div>
              <div>Status</div>
              <div onClick={() => toggleSort('date')}>Date</div>
              <div onClick={() => toggleSort('amount')}>Amount</div>
            </div>
          </div>

          {filteredInvoices.map((inv) => {
            const statusColors = getStatusColor(inv.status)
            return (
              <div key={inv.id} className={styles.tableRow}>
                <input
                  type="checkbox"
                  checked={selectedInvoices.includes(inv.id)}
                  onChange={() =>
                    setSelectedInvoices((prev) =>
                      prev.includes(inv.id)
                        ? prev.filter((id) => id !== inv.id)
                        : [...prev, inv.id],
                    )
                  }
                />
                <div className={styles.gridRow}>
                  <div>{inv.id}</div>
                  <div>{inv.customer}</div>
                  <div>{inv.email}</div>
                  <div>
                    <span
                      style={{
                        backgroundColor: statusColors.bg,
                        color: statusColors.text,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '12px',
                      }}
                    >
                      {inv.status}
                    </span>
                  </div>
                  <div>{inv.date}</div>
                  <div>${inv.amount.toFixed(2)}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Invoices
