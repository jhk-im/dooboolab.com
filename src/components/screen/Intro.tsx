import React, { ReactElement } from 'react';

import Footer from '../shared/Footer';
import IntroPage from '../shared/IntroPage';
import MenuBar from '../shared/MenuBar';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
`;

const MenubarTemp = styled.div`
  height:120px;
  width:100%;
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
