/* eslint-disable react/no-danger */
import '../styles/index.css';
import '../styles/prism-theme.css';
import { Layout, ThemeProvider } from '@/components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function() {
          let theme;

          try {
            theme = localStorage.getItem('theme');
          } catch (_) {}

          if (!theme) {
            // below snippet borrowed from: https://joshwcomeau.com/gatsby/dark-mode/
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';

            if (hasMediaQueryPreference) {
              theme = mql.matches ? 'dark' : 'light';
            }
          }

          localStorage.setItem('theme', theme);
          document.querySelector('html').setAttribute('class', theme);
        })();`,
        }}
      />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
