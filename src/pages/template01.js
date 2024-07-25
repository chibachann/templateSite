import * as React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import ToHome from '../components/ToHome/ToHome';
import Hero from '../components/Hero01/Hero';

const TemplatePage = () => {
    return (
      <Layout>
        <Hero />
        <ToHome />
      </Layout>
    );
  };

export default TemplatePage;

export const Head = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)
    return (
      <>
       <title>{data.site.siteMetadata.title}</title>
       <meta name="description" content={data.site.siteMetadata.description} />
      </>
    );
  }
  