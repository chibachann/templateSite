import * as React from 'react';
import Layout from '../components/layout';
import Concept from '../components/Concept01/Concept';
import Hero from '../components/Hero01/Hero';
import Point from '../components/Point/Point';
import Swipe from '../components/Swipe/Swipe';
import Works from '../components/Works/Works';

const CombinationPage = () => {
    return (
      <Layout>
        <Hero />
        <Concept />
        <Point />
        <Swipe />
        <Works />
        
      </Layout>
    );
  };

export default CombinationPage;

  