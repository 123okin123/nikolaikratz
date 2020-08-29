import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/layout';
import { PortfolioListRouted } from '../components/portfolio-list/portfolio-list';
import SEO from '../components/seo';

const IndexPage: React.FC<PageProps<null>> = () => (
  <Layout>
    <SEO title="Home" />
    <div className="py-24 ">
      <section className="container mx-auto px-6">
        <h1 className="font-bold text-6xl leading-tight">
          Hello,
          <br />
          I'm Nikolai Kratz
        </h1>
        <h2 className="text-xl">Web & Mobile App Developer</h2>
        <p className="mt-10 w-3/4">
          Started as an iOS Developer (Swift) I soon moved to
          JS Development and was able to gain experience in App
          Frameworks as well as Frontend and Backend Technologies.
          I consider myself as Fullstack Developer, who developed skills
          in Node.js, Nest.js, Angular & Typescript and focused on React
          Native & React in the last years.
        </p>
      </section>

      <section className="py-12">
        <PortfolioListRouted />
      </section>
    </div>
  </Layout>
);

export default IndexPage;
