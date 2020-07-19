import React, { ReactElement } from 'react';

import ContactPage from '../shared/ContactPage';
import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
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
  height:120px;
  width:100%;
`;

function Intro(): ReactElement {
  return (
    <Container>
      <MenuBar currentPage={getString('CONTACT')} />
      <MenubarTemp/>
      <ContactPage/>
      <Footer/>
    </Container>
  );
}

export default Intro;
