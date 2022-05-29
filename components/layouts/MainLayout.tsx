import { FC, ReactNode } from 'react'

import Head from 'next/head'

import Navbar from '../Navbar'

import styles from './MainLayout.module.css'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home - Juan Camilo</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        { children }
      </main>

    </div>
  )
}

export default MainLayout