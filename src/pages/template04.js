import * as React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Swipe from '../components/Swipe/Swipe';


const TemplatePage = () => {
    return (
      <Layout>
        <Swipe/>
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
  