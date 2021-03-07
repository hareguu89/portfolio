import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';

const projects = [
  {
    intro: '#HMI Research #WoZ',
    projectName: 'Tesla Take Over Request Experience Case Study',
    projectSub: 'based on Lv3 Autonomous Driving',
    img: '/images/TeslaThumnail.png',
    article:
      'Interface Design Proposal With the goal of designing a safe driving experience, I suggest the driver variables according to the SAE lv3 automation guide and measure driving proficiency base situation awareness in planned control transitions during non-driving tasks.',
    imgBtn: '/images/viewcasestudy_button.png',
    path: '/tesla',
  },
  {
    intro: '#UX Research #AR #Camera',
    projectName: 'Yarra Trash Monsters',
    projectSub: ' Community-Driven AR Camera Service Design',
    img: '/images/Yarra_thumbnail.png',
    article:
      'Interface Design Proposal With the goal of designing a safe driving experience, I suggest the driver variables according to the SAE lv3 automation guide and measure driving proficiency base situation awareness in planned control transitions during non-driving tasks.',
    imgBtn: '/images/viewproject_button.png',
    path: '/yarratrashmonsters',
  },
  {
    intro: '#VUX #FGI #GoogleAction #Dialogflow',
    projectName: 'Louis',
    projectSub: 'Voice Enabled Chatbot for Visual Impaired',
    img: '/images/TeslaThumnail.png',
    article:
      'Interface Design Proposal With the goal of designing a safe driving experience, I suggest the driver variables according to the SAE lv3 automation guide and measure driving proficiency base situation awareness in planned control transitions during non-driving tasks.',
    imgBtn: '/images/viewproject_button.png',
    path: '/louis',
  },
];

const SectionFeature = (): JSX.Element => {
  return (
    <>
      <FeatureContainer>
        <Features>
          <Text> - Featured</Text>
          {projects.map((el, index) => {
            return (
              <Projects
                key={index}
                intro={el.intro}
                projectName={el.projectName}
                projectSub={el.projectSub}
                img={el.img}
                article={el.article}
                imgBtn={el.imgBtn}
                path={el.path}
              ></Projects>
            );
          })}
        </Features>
      </FeatureContainer>
    </>
  );
};

const Features = styled.div`
  width: 745px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Text = styled.div`
  font-size: 26px;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  aligm-items: center;
  width: 100%;
  padding-top: 100px;
`;
export default SectionFeature;
