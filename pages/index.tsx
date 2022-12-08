import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firebase Authenticated Website</title>
      </Head>
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
