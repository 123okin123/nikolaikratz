import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/static-queries/use-site-metadata';

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<
    | {
        name: string;
        content: any;
        property?: undefined;
      }
    | {
        property: string;
        content: any;
        name?: undefined;
      }
  >;
  title: string;
}
function SEO({ description, lang = 'en', meta = [], title }: SEOProps): ReactElement {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      // title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.infoData.contact.twitter_handle
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
      ].concat(meta)}
    >
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default SEO;
