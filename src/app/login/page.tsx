import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

