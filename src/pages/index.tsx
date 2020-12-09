import React from 'react';
import Link from 'next/link';
import { Seo } from '../components';

const Home: React.FC = () => (
  <>
    <Seo description="" title="nosnote" />
    <p className="text-2xl font-bold">hello world</p>
  </>
);

export default Home;
