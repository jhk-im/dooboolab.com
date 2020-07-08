import React, { CSSProperties, ReactElement } from 'react';

import { IC_DOOBOOLAB_LOGO } from '../../utils/Icons';
import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

interface Props {
  style?: CSSProperties;
  currentPage?: string;
}

const MenuBarWrapper = styled.div`
  display: flex;
  height: 100;
  width: 100vw;
  position: absolute;
  align-items: center;
  justify-content: space-between;
`;

const MenuButtonWrapper = styled.div`
  display: flex;
  width: 45vw;
  height: 60%;
  margin-right: 50;
  align-items: center;
  justify-content: space-around;
`;

function Menu(props: Props): ReactElement {
  const { style } = props;
  return (
    <MenuBarWrapper style={style}>
      <LogoButton imgSrc={IC_DOOBOOLAB_LOGO}/>
      <MenuButtonWrapper>
        <MenuButton text={getString('STORY')}></MenuButton>
        <MenuButton text={getString('WORK')}></MenuButton>
        <MenuButton text={getString('PEOPLE')}></MenuButton>
        <MenuButton text={getString('CONTACT')}></MenuButton>
      </MenuButtonWrapper>
    </MenuBarWrapper>
  );
}

Menu.defaultProps = {
  sytle: { display: 'flex' },
};

export default Menu;
