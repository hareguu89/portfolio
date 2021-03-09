import React from 'react';
import styled from 'styled-components';

import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import SectionIntro from '../components/home/SectionIntro';
import SectionFeature from '../components/home/SectionFeature';
import SectionEdu from '../components/home/SectionEdu';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <SectionIntro />
      <SectionFeature />
      <SectionEdu />
    </>
  );
};

export default Home;
