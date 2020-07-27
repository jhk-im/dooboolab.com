import React, { ReactElement } from 'react';
import { device, icon } from '../../theme';

import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100px;
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
`;

function MenuBar(): ReactElement {
  const history = useHistory();
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

  return (
    <Container>
      <LogoButton
        href = { '/' }
        onClick={ (): void => tabChange('/', 5) }
        imgSrc={icon.logo}/>
      <MenuButtonWrapper>
        {
          titles.map((title, i) => {
            return <MenuButton
              key={i}
              onClick = { (): void => tabChange('/', i) }
              href = { hrefs[i] }
              text={ titles[i] }
              isSelected={ Number(currentPage) === i && true }
            />;
          })
        }
      </MenuButtonWrapper>
    </Container>
  );
}

export default MenuBar;
