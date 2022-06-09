import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import ContactForm from '../components/contact';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Kent Ezra Betita | Contact</title>
      </Head>
      <ContactForm />
    </Layout>
  );
}
