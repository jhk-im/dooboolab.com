import { Icon, device } from '../../theme';
import React, { ReactElement } from 'react';

import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Props {
  currentPage?: string;
}

const Container = styled.div`
  height: 100px;
  width: 100vw;
  background: ${({ theme }): string => theme.background};

  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  @media ${device.tablet} {
    height: 70px;
    flex-direction: row;
    justify-content: space-between; 
  }    
`;

const MenuButtonWrapper = styled.div`
  width: 90vw;
  
  display: flex;
  justify-content: center;
  align-content: center;

  @media ${device.mobileL} {
    width: 500px;
  }  

  @media ${device.tablet} {
    margin-top: 5px;
    width: 600px;
    margin-right: 80px;
    justify-content: space-between;
  }    

  @media ${device.mobileL} {
    width: 500px;
  }  

  @media ${device.tablet} {
    margin-top: 5px;
    width: 600px;
    margin-right: 80px;
    justify-content: space-between;
  }    

`;

function MenuBar(props: Props): ReactElement {
  const history = useHistory();
  const { currentPage } = props;
  const menuButtons = [];
  const titles = [
    getString('STORY'),
    getString('WORK'),
    getString('PEOPLE'),
    getString('CONTACT'),
  ];
  const hrefs = [
    '#story',
    '#work',
    '#people',
    '#contact',
  ];

  const tabChange = (inputPath): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: { },
    };
    history.push(location);
  };

  for (let i = 0; i < titles.length; i++) {
    menuButtons.push(
      <MenuButton
        onClick = { (): void => tabChange('/') }
        href = { hrefs[i] }
        text={ titles[i] }
        isSelected={ currentPage === titles[i] && true }
      />,
    );
  }

  return (
    <Container>
      <LogoButton
        onClick={ (): void => tabChange('/') }
        imgSrc={Icon.logo}/>
      <MenuButtonWrapper>
        { menuButtons }
      </MenuButtonWrapper>
    </Container>
  );
}

export default MenuBar;
