import styles from './LoginForm.module.css';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to your InventoryPro account</p>
      </div>
      
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div className={styles.options}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Remember me</span>
          </label>
          <Link href="#forgot" className={styles.forgotLink}>Forgot password?</Link>
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>
      </form>
      
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Don't have an account?{' '}
          <Link href="/signup" className={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

