import React, { ReactElement } from 'react';

import ContactPage from './ContactPage';
import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
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

function Intro(): ReactElement {
  return (
    <Container>

      <MenuBar currentPage={4}/>

      <MenubarTemp/>

      <ContactPage/>

      <Footer/>

    </Container>
  );
}

export default Intro;
