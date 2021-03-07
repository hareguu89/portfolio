import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import SectionIntro from './SectionIntro';
import SectionFeature from './SectionFeature';
const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <SectionIntro />
      <SectionFeature />
      <Footer />
    </>
  );
};

export default Home;
