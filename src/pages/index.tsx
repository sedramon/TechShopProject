import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import MainLayout from '@/components/layouts/main-layout'
import NavLayout from '@/components/layouts/main-layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <h1>Home Page!</h1>
        <a href=""></a>
        <div>
          <img src="" alt="" />
          <h2>Good Prices!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore expedita molestias eius temporibus vel error, magni quo iste quis i
            llum sunt omnis esse nemo veritatis odit corrupti saepe corporis atque.</p>
        </div>
        <a href=""></a>
        <div>
          <img src="" alt="" />
          <h2>Good Prices!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore expedita molestias eius temporibus vel error, magni quo iste quis i
            llum sunt omnis esse nemo veritatis odit corrupti saepe corporis atque.</p>
        </div>
        <a href=""></a>
        <div>
          <img src="" alt="" />
          <h2>Good Prices!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore expedita molestias eius temporibus vel error, magni quo iste quis i
            llum sunt omnis esse nemo veritatis odit corrupti saepe corporis atque.</p>
        </div>
      </main>

    </div>
  )
}
