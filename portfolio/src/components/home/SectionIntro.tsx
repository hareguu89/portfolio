import React from 'react';
import styled from 'styled-components';

const SectionIntro = (): JSX.Element => {
  return (
    <>
      <Intro>
        <IntroContainer>
          <IntroItem1>Kyung Seok Oh 💫</IntroItem1>
          <IntroItem2>
            a Product Designer, specialize in User Service Scenario through
            <br />
            User-Centered approach and HCI.
          </IntroItem2>
        </IntroContainer>
      </Intro>
    </>
  );
};

const Intro = styled.div`
  justify-content: center;
  display: flex;
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 50px;
  width: 745px;

  //   @media only screen and (max-width: 744px) {
  //     width: 100%;
  //   }
`;

const IntroItem1 = styled.div`
  font-size: 44px;
  font-weight: bold;
`;

const IntroItem2 = styled.div`
  font-size: 22px;
`;

export default SectionIntro;
