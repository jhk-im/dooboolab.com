import React, { ReactElement } from 'react';

import DarkModeToggle from '../shared/DarkModeToggle';
import Footer from '../shared/Footer';
import MenuBar from '../shared/MenuBar';
import VisionMissionPage from '../shared/VisionPage';
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

const MenubarEmptyBox = styled.div`
  height: 100px;
  width: 100vw;

  @media ${device.tablet} {
    height: 70px;
  }    
`;

function Vision(): ReactElement {
  const { changeThemeType } = useThemeContext();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <MenuBar/>
      <DarkModeToggle onClick={(): void => changeThemeType()} />
      <MenubarEmptyBox/>
      <VisionMissionPage/>
      <Footer/>
    </Container>
  );
}

export default Vision;
