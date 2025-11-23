'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import styles from './LoginForm.module.css';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const { login, isAuthenticated, isLoading, error, clearError } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    clearError();

    try {
      await login(formData);
      router.push('/dashboard');
    } catch (err: any) {
      setLocalError(err.message || 'Login failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (localError || error) {
      setLocalError(null);
      clearError();
    }
  };

  const displayError = localError || error;

  return (
    <div className={styles.formContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to your InventoryPro account</p>
      </div>
      
      {displayError && (
        <div className={styles.errorMessage}>
          {displayError}
        </div>
      )}
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
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
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        
        <div className={styles.options}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Remember me</span>
          </label>
          <Link href="#forgot" className={styles.forgotLink}>Forgot password?</Link>
        </div>
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
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

