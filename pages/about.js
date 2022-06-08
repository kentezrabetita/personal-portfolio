import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import AboutComponent from '../components/about';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Kent Ezra Betita | About</title>
        <meta
          name='description'
          content='Kent Ezra Betita Personal Portfolio Website'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AboutComponent />
    </Layout>
  );
}
