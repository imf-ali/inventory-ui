'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './DashboardLayout.module.css';
import ThemeToggle from './ThemeToggle';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/dashboard/product-registration', label: 'Product Registration', icon: '📦' },
  { path: '/dashboard/product-search', label: 'Product Search', icon: '🔍' },
  { path: '/dashboard/scan-sell', label: 'Scan and Sell', icon: '📱' },
  { path: '/dashboard/payment-billing', label: 'Payment & Billing', icon: '💳' },
  { path: '/dashboard/analytics', label: 'Analytics Dashboard', icon: '📈' },
  { path: '/dashboard/inventory-alert', label: 'Inventory Low Alert', icon: '🔔' },
  { path: '/dashboard/reminders', label: 'Reminder to Sell/Return', icon: '📅' },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={styles.dashboard}>
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarHeader}>
          <Link href="/dashboard" className={styles.logo}>
            <div className={styles.logoIcon}></div>
            <span className={styles.logoText}>InventoryPro</span>
          </Link>
          <button
            className={styles.toggleBtn}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d={sidebarOpen ? "M6 15L11 10L6 5" : "M5 5L15 5M5 10L15 10M5 15L15 15"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {sidebarOpen && <span className={styles.navLabel}>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.pageTitle}>
              {menuItems.find(item => item.path === pathname)?.label || 'Dashboard'}
            </h1>
            <div className={styles.headerActions}>
              <ThemeToggle />
              <button className={styles.userBtn}>
                <span className={styles.userIcon}>👤</span>
                <span>User</span>
              </button>
            </div>
          </div>
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}

