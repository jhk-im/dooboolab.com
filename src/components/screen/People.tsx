import React, { ReactElement } from 'react';

import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
import PeoplePage from '../shared/PeoplePage';
import { getString } from '../../../STRINGS';
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

function People(): ReactElement {
  return (
    <Container>
      <MenuBar currentPage={getString('PEOPLE') }/>
      <MenubarTemp/>
      <PeoplePage/>
      <Footer/>
    </Container>
  );
}

export default People;
