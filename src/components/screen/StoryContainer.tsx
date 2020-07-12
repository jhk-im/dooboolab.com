import React, { ReactElement } from 'react';

import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
import StoryPage from './StoryPage';
import styled from 'styled-components';

// 최상위 컨테이너
const Container = styled.div`
  display: flex;
  width: 100vw;
  align-self: stretch;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
`;

const MenubarTemp = styled.div`
  height:120px;
  width:100%;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 180px;
  background: #40444F;
  @media (max-width: 1000px) {
    height: 160px;
  }
  @media (max-width: 800px) {
    height: 130px;
  }
  @media (max-width: 600px) {
    height: 100px;
  }
`;

const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align:left;
`;

const FooterText1 = styled.div`
  padding:10px;
  font-size: 18px;
  font-family: futura;
  color: #BEC8E2;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const FooterText2 = styled.div`
  padding: 10px;
  font-size: 20px;
  font-family: avenir;
  color: #ffffff;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

function Intro(): ReactElement {
  return (
    <Container>

      <MenuBar currentPage={1}/>

      <MenubarTemp/>

      <StoryPage/>

      <Footer/>

    </Container>
  );
}

export default Intro;
