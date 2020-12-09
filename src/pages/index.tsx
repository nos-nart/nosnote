import React from 'react';
import { Layout, Seo } from '@/components';

const Home: React.FC = () => (
  <Layout>
    <Seo description="" title="nosnote" />
    <p className="text-2xl font-bold">hello world</p>
  </Layout>
);

export default Home;
