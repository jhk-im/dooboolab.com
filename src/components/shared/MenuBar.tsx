import { Icon, device } from '../../theme';
import React, { ReactElement } from 'react';

import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

localStorage.getItem('isDarkMode');
const Container = styled.div`
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

function MenuBar(): ReactElement {
  const history = useHistory();
  const menuButtons = [];
  const titles = [getString('STORY'), getString('WORK'), getString('PEOPLE'), getString('CONTACT')];
  const hrefs = ['#story', '#work', '#people', '#contact'];

  const tabChange = (inputPath, pageNumber): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: { },
    };
    history.push(location);
    localStorage.setItem('currentPage', pageNumber);
  };

  const currentPage = localStorage.getItem('currentPage');

  for (let i = 0; i < titles.length; i++) {
    menuButtons.push(
      <MenuButton
        onClick = { (): void => tabChange('/', i) }
        href = { hrefs[i] }
        text={ titles[i] }
        isSelected={ currentPage === i.toString() && true }
      />,
    );
  }

  return (
    <Container>
      <LogoButton
        href = { '#intro' }
        onClick={ (): void => tabChange('/', 5) }
        imgSrc={Icon.logo}/>
      <MenuButtonWrapper>
        { menuButtons }
      </MenuButtonWrapper>
    </Container>
  );
}

export default MenuBar;
