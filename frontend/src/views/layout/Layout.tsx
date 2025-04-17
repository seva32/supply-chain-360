import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

import styles from './Layout.module.css'

interface LayoutProps extends React.PropsWithChildren {
  justFooter?: boolean
}

function Layout({ children, justFooter }: LayoutProps) {
  return (
    <>
      {!justFooter && (
        <>
          <Navigation />
          <main className={styles.mainContent}>{children}</main>
        </>
      )}
      <Footer />
    </>
  )
}

export default Layout
