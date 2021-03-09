import React from 'react';
import styled from 'styled-components';
import TeslaIntro from '../components/tesla/TeslaIntro';

const Tesla = (): JSX.Element => {
  return (
    <>
      <TeslaContainer>
        <TeslaIntro />
      </TeslaContainer>
    </>
  );
};

const TeslaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Tesla;
