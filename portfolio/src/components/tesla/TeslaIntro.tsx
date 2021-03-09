import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const TeslaIntro = (): JSX.Element => {
  const history = useHistory();
  const redirect = () => {
    history.push('/');
  };

  return (
    <>
      <StudyContainer>
        <Redirect onClick={redirect}>Kyung Seok Oh</Redirect>
      </StudyContainer>
      <StudyContainer padding="0">
        <StudyName color="grey">Graduate Thesis</StudyName>
        <StudyDetail color="grey">Goal</StudyDetail>
      </StudyContainer>
      <StudyContainer padding="0">
        <StudyName bold="bold">
          Tesla Take Over Request <br />
          Experience Case Study
        </StudyName>
        <StudyDetail>
          Design whether the setting of driving proficiency affects the
          situation awareness of non-driving tasks in the context of a planned
          control transition aimed at a safe driving experience.
        </StudyDetail>
      </StudyContainer>
      <ImageFirst src="/images/tesla/teslabg.png" />
      <StudyContainer>
        <StudyName>Background</StudyName>
        <StudyDetail>
          Level 3 Autonomous Driving infers conditional automation. This means
          the vehicle can take over all driving functions under certain
          circumstances. At this level, the driver can fully disengage until the
          vehicle tells you otherwise. Going from level 2 to level 3 requires
          substantial increases in functional safety levels and system
          redundancies. In certain circumstances, the vehicle will need to ask
          the driver to re-engage. Since the driver cannot be assumed to take
          control instantaneously, the system will need to ensure safety for a
          period of time when the driver is still not engaged. This Case Study
          aims to simulate and find the optimum methods that suit under level 3
          autonomous driving based on Tesla interface.
        </StudyDetail>
      </StudyContainer>
      <StudyContainer>
        <StudyName>Desk & Field Research</StudyName>
        <StudyDetail>
          At the seminar on research results of self-driving cars R&D and
          testbeds, the Electronics and Tellecommunications Research Institute
          (ETRI) considers the time it takes for a person to recognize and drive
          manually in 4 seconds in international standards. The results of the
          actual ETRI simulation of 91 people directly and it took an average of
          14.25 seconds for the driver to fully return to his usual driving
          skills. This means that for a safe self-driving experience, at least
          19 seconds of time is needed from requesting control to stabilizing
          phase. However, these figures represent average values that do not
          take into account driver variables, which require more detailed user
          modeling when designing the user experience of the interface.
        </StudyDetail>
      </StudyContainer>
      <StudyContainer>
        <StudyName>Hypothesis</StudyName>
        <StudyDetail>
          <ImageSecond src="/images/tesla/hypothesis.png" />
          If 19 seconds from the notification time of control transition to the
          stabilization stage after switching to manual operation, the
          hypothesis was established by guessing that the notification time of
          control by driving proficiency would affect the hypothesis was
          established.
        </StudyDetail>
      </StudyContainer>
      <StudyContainer direction="column">
        <StudyName>Hypothesis</StudyName>
        <ImageScenario src="/images/tesla/User Scenario.png" />
      </StudyContainer>
      <StudyContainer>
        <StudyName>Visualize</StudyName>
        <StudyDetail>
          <StudyDetail>
            The infotainment UI was implemented as much as possible through
            Figma by referring to the driver's manual on Tesla's official
            website. In particular, I designed the driver proficiency screen to
            be mandatory before using NOA according to lv3 autonomous driving,
            and designed a safe driving experience by notifying algorithms about
            take over request times. In addition, in TOR phase was designed to
            automatically report to 119 and insurance companies by parking the
            vehicle on the shoulder in case the driver is unable to take over
            normally due to health problem like cardiac arrest.
          </StudyDetail>
        </StudyDetail>
      </StudyContainer>
      <Section1>
        <Section1Image src="/images/tesla/section1/Settings.png" />
        <Section1Image src="/images/tesla/section1/Driving Proficiency.png" />
      </Section1>
      <Section1>
        <Section1Image src="/images/tesla/section1/NOA_Settings.png" />
        <Section1Image src="/images/tesla/section1/NOA_Announcement.png" />
      </Section1>
      <Label>Setting Phase</Label>
      <Section1>
        <Section2Image src="/images/tesla/section2/Landing.png"></Section2Image>
        <Section2Image src="/images/tesla/section2/Autopilot.png"></Section2Image>
        <Section2Image src="/images/tesla/section2/NOA.png"></Section2Image>
      </Section1>
      <Label>NOA Driving Phase</Label>
      <Section1>
        <Section1Image src="/images/tesla/section3/TOR1.png" />
        <Section1Image src="/images/tesla/section3/TOR2.png" />
      </Section1>
      <Section1>
        <Section1Image src="/images/tesla/section3/TOR3.png" />
        <Section1Image src="/images/tesla/section3/Arrival.png" />
      </Section1>
      <Label>TOR Phase</Label>
      <StudyContainer>
        <StudyName>Woz Experimental Design</StudyName>
        <StudyDetail>
          Although I wanted to conduct a practical test to collect feedback from
          realistic drivers, I adopted the WoZ methodology because there were
          legal and safety restrictions to actually replace the existing Tesla
          infotainment system.
        </StudyDetail>
      </StudyContainer>
      <Section4Image src="/images/tesla/section4/Frame 5.png"></Section4Image>
      <StudyContainer>
        <StudyName>Evaluation</StudyName>
        <StudyDetail>
          In accordance with R.M Taylor's devised Situation Awareness Rating
          Technique, the TOR notification time was tested for the same 19
          seconds and the redesigned TOR method was applied according to the
          driving proficiency.
        </StudyDetail>
      </StudyContainer>
      <Section4Image src="/images/tesla/section5/Frame4.png"></Section4Image>
      <StudyContainer>
        <StudyName></StudyName>
        <StudyDetail>
          When the Paired T-Test is conducted, the probability of significance
          is less than 0.01, so the null hypothesis is rejected and the
          alternative hypothesis is adopted. This means that the design of the
          control transition according to the driving proficiency setting
          probably affects the driver experience.
        </StudyDetail>
      </StudyContainer>
      <StudyContainer>
        <StudyName>Limits</StudyName>
        <StudyDetail>
          The experimental design failed to reflect various control transition
          situations, such as road conditions and weather conditions.
          <br />
          <br />
          The number of samples was small to cover the three levels of driving
          proficiency set by hypothesis.
          <br />
          <br />
          The lv3 self-driving time of the actual vehicle through woz has been
          about 30 minutes. This case study is limited to short-term experience
          surveys, given that 30 minutes is a relatively short time to identify
          changes in the driver's experience of various road conditions.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </StudyDetail>
      </StudyContainer>
    </>
  );
};

const Section4Image = styled.img`
  max-width: 1130px;
`;

const Label = styled.div`
  font-size: 14px;
  padding-bottom: 40px;
`;

const Section1 = styled.div`
  max-width: 1130px;
  display: flex;
  height: auto;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Section1Image = styled.img`
  width: 555px;
`;
const Section2Image = styled.img`
  width: 365px;
`;

const ImageScenario = styled.img`
  max-width: 1130px;
`;

const ImageSecond = styled.img`
  width: 100%;
  padding-bottom: 10px;
`;

const ImageFirst = styled.img`
  width: 1130px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StudyContainer = styled.div<{ direction?: string; padding?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.direction ? 'column' : 'row')};
  width: 100%;
  max-width: 1130px;
  padding-top: ${(props) => (props.padding ? '10px' : '30px')};
  padding-bottom: ${(props) => (props.padding ? '0' : '30px')};
  gap: 20px;
`;

const StudyName = styled.article<{ bold?: string; color?: string }>`
  font-size: 16px;
  display: flex;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => props.color || 'white'};
  line-height: 20px;
`;

const StudyDetail = styled.section`
  font-size: 16px;
  width: 600px;
  color: ${(props) => props.color || 'white'};
  line-height: 20px;
`;

const Redirect = styled.a`
  font-weight: bold;
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  line-height: 40px;
  &: hover {
    background: linear-gradient(to right, #ac7fd0, #99cfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default TeslaIntro;
