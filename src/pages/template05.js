import * as React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Works from '../components/Works/Works';


const TemplatePage = () => {
    return (
      <Layout>
        <Works />
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
  