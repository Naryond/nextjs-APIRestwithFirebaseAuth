import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';

const noAuthRequired = ['/', '/login', '/signup'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <Head>
        <title>Firebase Authenticated Website</title>
      </Head>
      <NavBar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
