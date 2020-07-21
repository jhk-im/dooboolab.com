import React, { ReactElement } from 'react';

import Footer from '../shared/Footer';
import IntroPage from '../shared/IntroPage';
import MenuBar from '../shared/MenuBar';
import { device } from '../../theme';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
`;

const MenubarTemp = styled.div`
  height: 100px;
  width: 100vw;

  @media ${device.tablet} {
    height: 70px;
  }    
`;

function Intro(): ReactElement {
  return (
    <Container>
      <MenuBar/>
      <MenubarTemp/>
      <IntroPage/>
      <Footer/>
    </Container>
  );
}

export default Intro;
