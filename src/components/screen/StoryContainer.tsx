import React, { ReactElement } from 'react';

import {
  IC_DOOBOOLAB_LOGO,
} from '../../utils/Icons';
import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import StoryPage from './StoryPage';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// 최상위 컨테이너
const Container = styled.div`
  display: flex;
  width: 100vw;
  align-self: stretch;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
`;

const MenuBarWrapper = styled.div`
  display: flex;
  height: 120;
  width: 100vw;
  background: white;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    justify-content: space-between;
    flex-direction: column;
  }
`;

const MenuButtonWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 60px;
  margin-top:15px;
  margin-right: 50px;
  align-items: center;
  justify-content: space-around;
  
  @media (max-width: 700px) {
    width: 80%;
    margin-top: 0px;
    margin-right: 0px;
  }
`;

function Intro(): ReactElement {
  const history = useHistory();

  const tabChange = (path): void => {
    const location: Record<string, any> = {
      pathname: path,
      state: {},
    };
    history.push(location);
  };

  return (
    <Container>

      <MenuBarWrapper>
        <LogoButton onClick={(): void => tabChange('/intro')} imgSrc={IC_DOOBOOLAB_LOGO}/>
        <MenuButtonWrapper>
          <MenuButton onClick={(): void => tabChange('/story')} text={getString('STORY')} isSelected={true}/>
          <MenuButton onClick={(): void => tabChange('/work')} text={getString('WORK')}/>
          <MenuButton onClick={(): void => tabChange('/people')} text={getString('PEOPLE')}/>
          <MenuButton onClick={(): void => tabChange('/contact')} text={getString('CONTACT')}/>
        </MenuButtonWrapper>
      </MenuBarWrapper>
      <StoryPage/>
    </Container>
  );
}

export default Intro;
