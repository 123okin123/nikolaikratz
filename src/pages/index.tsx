import { PageProps } from 'gatsby';
import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PortfolioList from '../components/molecules/portfolio-list';

const IndexPage: React.FC<PageProps<null>> = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <section>
        <h1>
          Hello,
          <br />
          I'm Nikolai Kratz
        </h1>
        <h2>Web & Mobile App Developer</h2>
        <p>
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
    </Container>
  </Layout>
);

export default IndexPage;
