import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO: React.FC<SEOProps> = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const seo = site.siteMetadata;

  return (
    <Helmet>
      {seo.title && <title>{seo.title}</title>}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    // TODO: More relevant SEO stuff and metadata
  );
};

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<Record<string, unknown>>;
  title: string;
}

export default SEO;
