import * as React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Point from '../components/Point/Point';


const TemplatePage = () => {
    return (
      <Layout>
        <Point />
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
  