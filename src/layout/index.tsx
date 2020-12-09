import React from 'react';
import { Layout, Seo } from '@/components';

export default function Index({ children }) {
  return (
    <>
      <Seo title="notes" description="" />
      <Layout>
        <article>
          <header>
            <h1>Title</h1>
          </header>
          <div>{children}</div>
        </article>
      </Layout>
    </>
  );
}
