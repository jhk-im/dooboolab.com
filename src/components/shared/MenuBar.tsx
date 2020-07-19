import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { IC_DOOBOOLAB_LOGO } from '../../utils/icons';
import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Props {
  currentPage?: string;
}

const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 100vw;
   
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
  display: flex;
  width: 800px;
  height: 60px;

  @media (max-width: 1000px) {
    width: 90%;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const menuButton = new Map<string, string>();

menuButton.set(getString('STORY'), '/story');
menuButton.set(getString('WORK'), '/work');
menuButton.set(getString('PEOPLE'), '/people');
menuButton.set(getString('CONTACT'), '/contact');

function MenuBar(props: Props): ReactElement {
  const history = useHistory();

  const { currentPage } = props;

  const tabChange = (inputPath): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: {},
    };
    history.push(location);
  };

  const menuButtons = [];

  for (const [key, value] of menuButton) {
    menuButtons.push(
      <MenuButton
        onClick={ (): void => tabChange(value) }
        text={ key }
        isSelected={ currentPage === key && true }/>,
    );
  }

  return (
    <Container>
      <LogoButton
        onClick={ (): void => tabChange('/') }
        imgSrc={ IC_DOOBOOLAB_LOGO }/>
      <MenuButtonWrapper>
        {menuButtons}
      </MenuButtonWrapper>
    </Container>
  );
}

export default MenuBar;
