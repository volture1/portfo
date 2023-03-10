import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tobias Östergren</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.page}>
          <h1 className={styles.headline}>Tobias Östergren</h1>
          <Image
        src="/media/bilden.jpg"
        alt="Your image description"
        width={200}
        height={100}
          />
          <div className={styles.card}></div>
          </div>
      </main>
    </>
  )
}
