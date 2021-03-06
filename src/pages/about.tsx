import { Link, PageProps } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import useSiteMetadata from '../hooks/static-queries/use-site-metadata';
import Layout from '../components/layout';

const SecondPage: React.FC<PageProps<null>> = () => {
  const metaData = useSiteMetadata();

  return (
    <Layout>
      <div className="py-12">
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p dangerouslySetInnerHTML={{ __html: metaData.infoData.description }} />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
};

export default SecondPage;
