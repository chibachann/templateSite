import * as React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Rooter from '../components/Rooter/Rooter';

const IndexPage = () => {
    return (
      <Layout>
        <Rooter />
      </Layout>
    );
  };

export default IndexPage;

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
  