import React from 'react';
import styled from 'styled-components';

const Footer = (): JSX.Element => {
  return (
    <>
      <FooterContainer>
        <FooterList>
          <FooterItem
            href="https://www.linkedin.com/in/kyung-seok-oh-022510143"
            target="_blank"
          >
            LinkedIn
          </FooterItem>
          |
          <FooterItem
            href="https://www.instagram.com/kaisennabe/"
            target="_blank"
          >
            Instagram
          </FooterItem>
        </FooterList>
      </FooterContainer>
    </>
  );
};

const FooterList = styled.li`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const FooterItem = styled.a`
  font-size: 1rem;
  gap: 20px;
  &: hover {
    background: linear-gradient(to right, #ac7fd0, #99cfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterContainer = styled.footer`
  justify-content: center;
  // display: flex;
  // position: fixed;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100px;
  bottom: 0px;
  width: 100%;
`;

export default Footer;
