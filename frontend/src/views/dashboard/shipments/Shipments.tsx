import React, { useState } from 'react'
import styles from './Shipments.module.css'

interface Shipment {
  id: number
  trackingNumber: string
  customer: string
  destination: string
  status: 'delivered' | 'in_transit' | 'pending'
  date: string
  amount: number
}

const Shipments: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<
    'all' | Shipment['status']
  >('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [shipments] = useState<Shipment[]>([
    {
      id: 1,
      trackingNumber: 'SHP12345678',
      customer: 'Sarah Wilson',
      destination: 'New York, NY',
      status: 'delivered',
      date: '2024-01-15',
      amount: 245.5,
    },
    {
      id: 2,
      trackingNumber: 'SHP87654321',
      customer: 'Michael Chen',
      destination: 'Los Angeles, CA',
      status: 'in_transit',
      date: '2024-01-16',
      amount: 189.99,
    },
    {
      id: 3,
      trackingNumber: 'SHP11223344',
      customer: 'Emma Davis',
      destination: 'Chicago, IL',
      status: 'pending',
      date: '2024-01-16',
      amount: 324.75,
    },
    {
      id: 4,
      trackingNumber: 'SHP99887766',
      customer: 'James Miller',
      destination: 'Houston, TX',
      status: 'delivered',
      date: '2024-01-14',
      amount: 156.25,
    },
    {
      id: 5,
      trackingNumber: 'SHP55443322',
      customer: 'Sofia Garcia',
      destination: 'Miami, FL',
      status: 'in_transit',
      date: '2024-01-16',
      amount: 278.5,
    },
  ])

  const getFilteredShipments = (): Shipment[] => {
    return shipments.filter((shipment) => {
      const matchesSearch =
        shipment.trackingNumber
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        shipment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shipment.destination.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus =
        selectedStatus === 'all' || shipment.status === selectedStatus
      return matchesSearch && matchesStatus
    })
  }

  const getStatusColor = (status: Shipment['status']): string => {
    const colors: Record<Shipment['status'], string> = {
      delivered: '#22C55E',
      in_transit: '#4318D1',
      pending: '#64748B',
    }
    return colors[status]
  }

  const getStatusText = (status: Shipment['status']): string => {
    const text: Record<Shipment['status'], string> = {
      delivered: 'Delivered',
      in_transit: 'In Transit',
      pending: 'Pending',
    }
    return text[status]
  }

  const formatAmount = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Shipment Management</h1>
            <p className={styles.subtitle}>Track and manage all shipments</p>
          </div>
          <button
            className={styles.button}
            onClick={() => alert('Create shipment clicked')}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Create Shipment</span>
          </button>
        </div>

        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Search shipments..."
            className={styles.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className={styles.select}
            value={selectedStatus}
            onChange={(e) =>
              setSelectedStatus(e.target.value as 'all' | Shipment['status'])
            }
          >
            <option value="all">All Status</option>
            <option value="delivered">Delivered</option>
            <option value="in_transit">In Transit</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div>Tracking Number</div>
            <div>Customer</div>
            <div>Destination</div>
            <div>Status</div>
            <div>Date</div>
            <div>Amount</div>
          </div>
          {getFilteredShipments().map((shipment) => (
            <div className={styles.tableRow} key={shipment.id}>
              <div className={styles.tracking}>{shipment.trackingNumber}</div>
              <div className={styles.customer}>{shipment.customer}</div>
              <div className={styles.destination}>{shipment.destination}</div>
              <div className={styles.status}>
                <span
                  className={styles.statusTag}
                  style={{
                    backgroundColor: `${getStatusColor(shipment.status)}15`,
                    color: getStatusColor(shipment.status),
                  }}
                >
                  {getStatusText(shipment.status)}
                </span>
              </div>
              <div className={styles.date}>{shipment.date}</div>
              <div className={styles.amount}>
                {formatAmount(shipment.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shipments
