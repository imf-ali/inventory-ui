'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
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
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isLoading } = useAuthStore();
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch {
      // Even if logout fails, clear local state and redirect
      router.push('/login');
    }
  };

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
              <div ref={userMenuRef} style={{ position: 'relative' }}>
                <button 
                  className={styles.userBtn}
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  disabled={isLoading}
                >
                  <span className={styles.userIcon}>👤</span>
                  <span>{user?.name || user?.email || 'User'}</span>
                </button>
                {userMenuOpen && (
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    marginTop: '0.5rem',
                    backgroundColor: 'var(--bg-secondary, #fff)',
                    border: '1px solid var(--border, #e0e0e0)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    minWidth: '200px',
                    zIndex: 1000,
                  }}>
                    <div style={{ padding: '1rem', borderBottom: '1px solid var(--border, #e0e0e0)' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                        {user?.name || 'User'}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary, #666)' }}>
                        {user?.email}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #666)', marginTop: '0.25rem' }}>
                        Role: {user?.role} | Shop: {user?.shopId || 'N/A'}
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      disabled={isLoading}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        textAlign: 'left',
                        border: 'none',
                        background: 'none',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        color: 'var(--text, #333)',
                        fontSize: '0.875rem',
                      }}
                      onMouseEnter={(e) => {
                        if (!isLoading) {
                          e.currentTarget.style.backgroundColor = 'var(--bg-hover, #f5f5f5)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {isLoading ? 'Logging out...' : 'Logout'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}

