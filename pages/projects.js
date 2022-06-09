import React from 'react';
import Layout from '../components/layout';
import ProjectGallery from '../components/projects';
import Head from 'next/head';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Kent Ezra Betita | Projects</title>
      </Head>
      <ProjectGallery />
    </Layout>
  );
}
