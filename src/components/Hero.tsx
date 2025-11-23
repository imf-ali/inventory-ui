'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { Play } from 'lucide-react';

// ✅ adjust paths to match your project layout
import bg1 from '../assets/logo/inventory-pic.png';
import bg2 from '../assets/logo/inventory-pic2.png';
import bg3 from '../assets/logo/inventory-pic3.png';

const backgrounds = [bg1.src, bg2.src, bg3.src];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // 5s per slide – change if you want
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background slider */}
      <div className={styles.backgroundWrapper}>
        {backgrounds.map((src, index) => (
          <div
            key={src}
            className={`${styles.bgImage} ${
              index === currentIndex ? styles.bgImageActive : ''
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleBlue}>Powerful Inventory</span>{' '}
          <span className={styles.titleTeal}>Management</span>
        </h1>
        <p className={styles.description}>
          Everything you need to manage your inventory efficiently and scale <br/>your business operations
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>
            Start Free Trial
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.secondaryBtn}> <Play size={18} style={{ marginRight: '8px', paddingTop : '3px' }} /> Watch Demo</button>
        </div>
      </div>
    </section>
  );
}
