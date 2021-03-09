import React from 'react';
import styled from 'styled-components';

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <Item>
          <MainLogo src={'/images/home/MainLogo.png'}></MainLogo>
          <Resume>resume</Resume>
        </Item>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  padding-top: 40px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainLogo = styled.img`
  width: 2.5rem;
`;

const Item = styled.div`
  width: 745px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Resume = styled.a`
  font-size: 1.1rem;
  cursor: pointer;
  &: hover {
    transition: all 0.9s;
    transform: scale(1.02);
    background: linear-gradient(to right, #ac7fd0, #99cfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &: active {
    transform: scale(1.05);
  }
`;
