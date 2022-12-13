import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Firebase Authenticated Website</h2>
        <p className={styles.description}>
          Get started by Log in using the Navigation Bar above.
        </p>
      </main>
    </div>
  );
};

export default Home;
