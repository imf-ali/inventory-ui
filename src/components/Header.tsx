// Header.tsx
'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left: logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>InventoryPro</span>
        </Link>

        {/* Center: nav links */}
        <nav className={styles.nav}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#pricing" className={styles.navLink}>Pricing</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
        </nav>

        {/* Right: toggle + buttons */}
        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/login" className={styles.signInBtn}>Sign In</Link>
          <Link href="/signup" className={styles.getStartedBtn}>Get Started</Link>
        </div>
      </div>
    </header>
  );
}
