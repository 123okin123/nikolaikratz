import { PageProps } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PortfolioList from '../components/molecules/portfolio-list';

const IndexPage: React.FC<PageProps<null>> = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <section>
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

      <section>
        <PortfolioList />
      </section>
    </div>
  </Layout>
);

export default IndexPage;
