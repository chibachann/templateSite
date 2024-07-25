import * as React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import ToHome from '../components/ToHome/ToHome';
import Concept from '../components/Concept/Concept';
import Hero from '../components/Hero01/Hero';
import Point from '../components/Point/Point';

const CombinationPage = () => {
    return (
      <Layout>
        <Hero />
        <Concept />
        <Point />
        <ToHome />
      </Layout>
    );
  };

export default CombinationPage;

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
  