import { useState } from 'react'
import styles from './Overview.module.css'

function Overview() {
  const [stats] = useState({
    totalShipments: 1247,
    activeRoutes: 89,
    totalRevenue: 284750,
    onTimeDelivery: 98.5,
    warehouses: 12,
    activeDrivers: 156,
  })

  const recentShipments = [
    {
      id: 1242,
      route: 'New York to Los Angeles',
      status: 'In Transit',
      statusColor: styles.inTransit,
    },
    {
      id: 1241,
      route: 'Miami to Chicago',
      status: 'Delivered',
      statusColor: styles.delivered,
    },
    {
      id: 1240,
      route: 'Seattle to Denver',
      status: 'Pending',
      statusColor: styles.pending,
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.gridCards}>
        {[
          {
            label: 'Total Shipments',
            value: stats.totalShipments.toLocaleString(),
            icon: (
              <path
                d="M20 8H4C3.45 8 3 8.45 3 9V18C3 18.55 3.45 19 4 19H20C20.55 19 21 18.55 21 18V9C21 8.45 20.55 8 20 8ZM20 18H4V9H20V18ZM7 5H17C17.55 5 18 4.55 18 4C18 3.45 17.55 3 17 3H7C6.45 3 6 3.45 6 4C6 4.55 6.45 5 7 5Z"
                fill="white"
              />
            ),
          },
          {
            label: 'Active Routes',
            value: stats.activeRoutes,
            icon: (
              <path
                d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17L12 12L2 17Z"
                fill="white"
              />
            ),
          },
          {
            label: 'On-Time Delivery',
            value: `${stats.onTimeDelivery}%`,
            icon: (
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
                fill="white"
              />
            ),
          },
          {
            label: 'Total Revenue',
            value: `$${stats.totalRevenue.toLocaleString()}`,
            icon: (
              <path
                d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"
                fill="white"
              />
            ),
          },
          {
            label: 'Warehouses',
            value: stats.warehouses,
            icon: (
              <path
                d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18Z"
                fill="white"
              />
            ),
          },
          {
            label: 'Active Drivers',
            value: stats.activeDrivers,
            icon: (
              <path
                d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                fill="white"
              />
            ),
          },
        ].map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {item.icon}
                </svg>
              </div>
              <div>
                <p className={styles.title}>{item.value}</p>
                <p className={styles.subtitle}>{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.gridPanels}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Recent Shipments</h2>
            <button className={styles.panelButton}>View All</button>
          </div>
          <div className={styles.shipmentList}>
            {recentShipments.map((shipment) => (
              <div className={styles.shipmentItem} key={shipment.id}>
                <div className={styles.shipmentInfo}>
                  <div className={styles.shipmentImageWrapper}>
                    <img
                      src="https://placehold.co/48x48"
                      alt="Package"
                      className={styles.shipmentImage}
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-[#1E293B]">
                      Package #{shipment.id}
                    </p>
                    <p className={styles.subtitle}>{shipment.route}</p>
                  </div>
                </div>
                <div className={styles.status}>
                  <div
                    className={`${styles.statusDot} ${shipment.statusColor}`}
                  />
                  <span>{shipment.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Monthly Active Routes</h2>
            <div className="flex gap-[16px]">
              <button className={styles.panelButton}>Last Month</button>
              {/* Complete this part as needed */}
            </div>
          </div>
          {/* Insert chart logic here or embed your chart component */}
        </div>
      </div>
    </div>
  )
}

export default Overview
