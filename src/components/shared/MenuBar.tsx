import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { IC_DOOBOOLAB_LOGO } from '../../utils/icons';
import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Props {
  currentPage?: number;
}

const Container = styled.div`
  height: 120px;
  width: 100vw;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
   
  @media (max-width:1000px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (prefers-color-scheme: dark) {
    background: ${darkColor.BACKGROUND};
  }

  @media (prefers-color-scheme: light){
    background: ${lightColor.BACKGROUND};
  }
`;

const MenuButtonWrapper = styled.div`
  width: 800px;
  height: 60px;
  display: flex;

  @media (max-width: 1000px) {
    width: 90%;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

function MenuBar(props: Props): ReactElement {
  const history = useHistory();
  const tabChange = (inputPath): void => {
    const location: Record<string, any> = {
      pathname: inputPath,
      state: {},
    };
    history.push(location);
  };
  const { currentPage } = props;
  return (
    <Container>
      <LogoButton
        onClick={ (): void => tabChange('/') }
        imgSrc={ IC_DOOBOOLAB_LOGO }/>
      <MenuButtonWrapper>
        <MenuButton
          onClick={ (): void => tabChange('/story') }
          text={ getString('STORY') }
          isSelected={ currentPage === 1 && true }/>
        <MenuButton
          onClick={ (): void => tabChange('/work') }
          text={ getString('WORK') }
          isSelected={ currentPage === 2 && true }/>
        <MenuButton
          onClick={ (): void => tabChange('/people') }
          text={ getString('PEOPLE') }
          isSelected={ currentPage === 3 && true }/>
        <MenuButton
          onClick={ (): void => tabChange('/contact') }
          text={ getString('CONTACT') }
          isSelected={ currentPage === 4 && true }/>
      </MenuButtonWrapper>
    </Container>
  );
}

export default MenuBar;
