import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brandColumn}>
            <div className={styles.brand}>
              <div className={styles.logoIcon}></div>
              <span className={styles.brandName}>InventoryPro</span>
            </div>
            <p className={styles.brandDescription}>
              Complete inventory management solution for modern businesses.
            </p>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Product</h3>
            <Link href="#features" className={styles.link}>Features</Link>
            <Link href="#pricing" className={styles.link}>Pricing</Link>
            <Link href="#demo" className={styles.link}>Demo</Link>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <Link href="#about" className={styles.link}>About</Link>
            <Link href="#blog" className={styles.link}>Blog</Link>
            <Link href="#contact" className={styles.link}>Contact</Link>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <Link href="#privacy" className={styles.link}>Privacy</Link>
            <Link href="#terms" className={styles.link}>Terms</Link>
            <Link href="#security" className={styles.link}>Security</Link>
          </div>
        </div>
        
        <div className={styles.copyright}>
          © 2025 InventoryPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

