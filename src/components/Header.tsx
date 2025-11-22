'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>InventoryPro</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <ThemeToggle />
          <Link href="/login" className={styles.signInBtn}>Sign In</Link>
          <Link href="/signup" className={styles.getStartedBtn}>Get Started</Link>
        </nav>
      </div>
    </header>
  );
}

