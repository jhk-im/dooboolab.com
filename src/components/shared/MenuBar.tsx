import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/Colors';

import { IC_DOOBOOLAB_LOGO } from '../../utils/Icons';
import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Props {
  currentPage?: number;
}

// MenuBar 전체 div
const MenuBarWrapper = styled.div`
  display: flex;
  height: 120px;
  width: 100vw;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 880px) {
    flex-direction: column;
  }
  @media (prefers-color-scheme: dark) {
    background: ${darkColor.BACKGROUND};
  }
  // light mode
  @media (prefers-color-scheme: light){
    background: ${lightColor.BACKGROUND};
  }
`;

// Menu Button 담고있는 div
const MenuButtonWrapper = styled.div`
  display: flex;
  width: 700px;
  height: 60px;
  margin-top: 15px;
  @media (max-width: 880px) {
    width: 100vw;
    margin-top: 0;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

function MenuBar(props: Props): ReactElement {
  // 페이지 변경 메소드
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
    <MenuBarWrapper>
      <LogoButton
        onClick={(): void => tabChange('/intro')}
        imgSrc={IC_DOOBOOLAB_LOGO}
      />
      <MenuButtonWrapper>
        <MenuButton
          onClick={(): void => tabChange('/story')}
          text={getString('STORY')}
          isSelected={ currentPage === 1 && true }
        />
        <MenuButton
          onClick={(): void => tabChange('/work')}
          text={getString('WORK')}
          isSelected={ currentPage === 2 && true }
        />
        <MenuButton
          onClick={(): void => tabChange('/people')}
          text={getString('PEOPLE')}
          isSelected={ currentPage === 3 && true }
        />
        <MenuButton
          onClick={(): void => tabChange('/contact')}
          text={getString('CONTACT')}
          isSelected={ currentPage === 4 && true }
        />
      </MenuButtonWrapper>
    </MenuBarWrapper>
  );
}

export default MenuBar;
