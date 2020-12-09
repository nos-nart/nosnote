import '../styles/index.css';
import '../styles/prism-theme.css';
import { Layout } from '@/components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
