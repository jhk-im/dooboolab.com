import React, { ReactElement } from 'react';

import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
import StoryPage from '../shared/StoryPage';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;

  display: flex;
  align-self: stretch;
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
      <MenuBar currentPage={getString('STORY')} />
      <MenubarTemp/>
      <StoryPage/>
      <Footer/>
    </Container>
  );
}

export default Intro;
