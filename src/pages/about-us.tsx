import NavLayout from "@/components/layouts/main-layout";
import Link from "next/link";
import styles from '@/styles/AboutUsPage.module.css'

export default function AboutUsPage() {
      return (
            
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.h1}>About Us</h1>
          <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea, 
          debitis cumque vitae autem doloremque voluptates nisi ex unde provident. 
          Molestiae ex quae eligendi nihil labore veritatis possimus id asperiores.</p>
          <h2 className={styles.h2}>Our Mission</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea, 
          debitis cumque vitae autem doloremque voluptates nisi ex unde provident. 
          Molestiae ex quae eligendi nihil labore veritatis possimus id asperiores.</p>
          <h2 className={styles.h2}>Our Team</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>John Doe - CEO</li>
            <li className={styles.li}>Jane Doe - COO</li>
            <li className={styles.li}>Bob Smith - CTO</li>
          </ul>
          <Link href="/" className={styles.link}>
            Go back to home page
          </Link>
        </main>
      </div>
    
      )
}