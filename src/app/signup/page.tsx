import Header from '@/components/Header';
import SignupForm from '@/components/SignupForm';
import styles from './page.module.css';

export default function SignupPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <SignupForm />
        </div>
      </main>
    </div>
  );
}

