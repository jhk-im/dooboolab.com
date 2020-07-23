import React, { ReactElement } from 'react';

import CodeOfConductPage from '../shared/CodeOfConductPage';
import DarkModeToggle from '../shared/DarkModeToggle';
import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
import { device } from '../../theme';
import styled from 'styled-components';
import { useThemeContext } from '../../providers/ThemeProvider';

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

function CodeOfConduct(): ReactElement {
  const { changeThemeType } = useThemeContext();

  return (
    <Container>
      <MenuBar/>
      <DarkModeToggle onClick={(): void => changeThemeType()} />
      <MenubarTemp/>
      <CodeOfConductPage/>
      <Footer/>
    </Container>
  );
}

export default CodeOfConduct;
