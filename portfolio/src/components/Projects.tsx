import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ProjectProps {
  intro: string;
  article: string;
  img: string;
  projectName: string;
  projectSub: string;
  imgBtn: string;
  path: string;
}

const Projects = ({
  intro,
  article,
  img,
  projectName,
  projectSub,
  imgBtn,
  path,
}: ProjectProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const handleShowUp = () => setOpen(!open);

  return (
    <>
      <ProjectContainer>
        <Intro>
          <Intro_Header>
            <Intro_Text>{intro}</Intro_Text>
            <Intro_Main>
              {projectName}
              <br />
              {projectSub}
            </Intro_Main>
          </Intro_Header>
          <Arrow src="/images/Arrow.png" alt="" onClick={handleShowUp} />
        </Intro>
        {open ? (
          <ContentMain>
            <ContentImage src={img} alt="" />
            <ContentArticle>
              {article}
              <ViewBtn to={path}>
                <Btn src={imgBtn} alt="" />
              </ViewBtn>
            </ContentArticle>
          </ContentMain>
        ) : null}
      </ProjectContainer>
    </>
  );
};

const Btn = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
`;

const ViewBtn = styled(Link)``;

const ContentArticle = styled.div`
  font-size: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  width: 350px;
`;

const ContentImage = styled.img`
  height: 180px;
  width: auto;
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const Intro_Text = styled.div`
  font-size: 12px;
`;
const Intro_Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Intro_Main = styled.div`
  font-size: 14px;
`;
const Arrow = styled.img`
  height: 20px;
  width: auto;
  align-self: center;
  cursor: pointer;
  justify-self: flex-end;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`;

const ProjectContainer = styled.div`
  display: flex;
  border-radius: 12px;
  background: linear-gradient(to bottom, #ac7fd0, #99cfff);
  padding: 40px;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-direction: column;
  //   height: 120px;
`;

export default Projects;
