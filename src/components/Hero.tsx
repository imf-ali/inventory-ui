import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleBlue}>Complete Inventory</span>{' '}
          <span className={styles.titleTeal}>Management Solution</span>
        </h1>
        <p className={styles.description}>
          Streamline your business operations with our comprehensive inventory management platform. 
          Track products, manage sales, and gain valuable insights—all in one place.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>
            Start Free Trial
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.secondaryBtn}>Watch Demo</button>
        </div>
      </div>
    </section>
  );
}

