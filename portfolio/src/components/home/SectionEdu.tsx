import React from 'react';
import styled from 'styled-components';

const SectionEdu = (): JSX.Element => {
  return (
    <>
      <Container>
        <EduContainer>
          <EduIntro>- Education</EduIntro>
          <EduArticle>
            <EduName>BA in Design (Digital Media), RMIT University</EduName>
            <EduDetail>Feb 2015 - Dec 2020</EduDetail>
          </EduArticle>
        </EduContainer>
        <EduContainer>
          <EduIntro>- Interests</EduIntro>
          <EduArticle>
            <EduName>
              UX Research, Product Design, HCI, Usability Test, Universal
              Design, AR
            </EduName>
          </EduArticle>
        </EduContainer>
        <EduContainer>
          <EduIntro>- Skills</EduIntro>
          <EduArticle>
            <EduName>UX Design</EduName>
            <EduDetail>Figma, Illustrator, Dialogflow</EduDetail>
          </EduArticle>
          <EduArticle>
            <EduName>Product Development</EduName>
            <EduDetail>HTML, CSS, Porcessing</EduDetail>
          </EduArticle>
          <EduArticle>
            <EduName>Product Management</EduName>
            <EduDetail>Keynote, SPSS, JASP, GA</EduDetail>
          </EduArticle>
          <EduArticle>
            <EduName>Others</EduName>
            <EduDetail>AfterEffects, Spark AR</EduDetail>
          </EduArticle>
        </EduContainer>
        <EduContainer>
          <EduIntro>- Extra Curricular Activities</EduIntro>
          <EduArticle>
            <EduName>
              Samsung Electronics System Air Conditioner BX Design Part-time
              Assistance, Cheil Vietnam
            </EduName>
            <EduDetail>Feb 2019 - Mar 2019</EduDetail>
          </EduArticle>
          <EduArticle>
            <EduName>Processing Challenge, RMIT University</EduName>
            <EduDetail>Oct 2019 - Jan 2020</EduDetail>
          </EduArticle>
        </EduContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 45px;
  padding-bottom: 45px;
`;

const EduContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;

const EduIntro = styled.div`
  font-size: 26px;
  width: 745px;
  font-weight: bold;
`;

const EduArticle = styled.article`
  display: flex;
  width: 745px;
  justify-content: space-between;
`;

const EduName = styled.section`
  font-size: 16px;
  width: 100%;
  max-width: 400px;

  &: hover {
    background: linear-gradient(to right, #ac7fd0, #99cfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const EduDetail = styled.section`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

export default SectionEdu;
