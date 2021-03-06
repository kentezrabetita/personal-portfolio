import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/landing/hero';
import SelectedProjects from '../components/landing/selected';
import Footer from '../components/landing/footer';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kent Ezra Betita</title>
        <meta
          name='description'
          content='Kent Ezra Betita Personal Portfolio Website'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <SelectedProjects />
      <Footer />
    </Layout>
  );
}
