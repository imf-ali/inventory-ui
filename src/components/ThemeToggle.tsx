'use client';

import { useTheme } from '@/lib/ThemeProvider';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 15.657L16.97 16.97M3.03 3.03L4.343 4.343M15.657 4.343L16.97 3.03M3.03 16.97L4.343 15.657M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.293 13.293C16.3785 14.2075 15.2351 14.8641 13.9922 15.2073C12.7493 15.5505 11.4404 15.5709 10.1882 15.2667C8.93605 14.9625 7.77791 14.3422 6.81802 13.4645C5.85813 12.5868 5.12252 11.4785 4.68036 10.2393C4.2382 9.00008 4.10195 7.66547 4.28364 6.35773C4.46533 5.04999 4.95939 3.80306 5.72512 2.71693C6.49085 1.6308 7.50519 0.737498 8.68478 0.112995C9.86437 -0.511508 11.1768 -0.853553 12.5155 -0.853553C13.8542 -0.853553 15.1666 -0.511508 16.3462 0.112995C17.5258 0.737498 18.5401 1.6308 19.3059 2.71693C20.0716 3.80306 20.5657 5.04999 20.7474 6.35773C20.9291 7.66547 20.7928 9.00008 20.3507 10.2393C19.9085 11.4785 19.1729 12.5868 18.213 13.4645C17.2531 14.3422 16.095 14.9625 14.8428 15.2667C13.5906 15.5709 12.2817 15.5505 11.0388 15.2073C9.79593 14.8641 8.6525 14.2075 7.73804 13.293L17.293 13.293Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

