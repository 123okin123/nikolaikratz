import { PageProps } from 'gatsby';
import React from 'react';
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PortfolioList from '../components/molecules/portfolio-list';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const IndexPage: React.FC<PageProps<null>> = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <h1>
        Hello,
        <br />
        I'm Nikolai Kratz
      </h1>
      <h2>Web & Mobile App Developer</h2>
      <motion.div
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
        initial={'hidden'}
        animate={'visible'}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <IntroText>
          Started as an iOS Developer (Swift) I soon moved to JS Development and was able to gain
          experience in App Frameworks as well as Frontend and Backend Technologies. I consider
          myself as Fullstack Developer, who developed skills in Node.js, Nest.js, Angular &
          Typescript and focused on React Native & React in the last years.
        </IntroText>
      </motion.div>
    </Container>

    <section>
      <PortfolioList />
    </section>
  </Layout>
);

const IntroText = styled.p`
  ${media.md`{
    width: 75%;
  `};
`;

export default IndexPage;
