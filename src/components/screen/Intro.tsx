import { DescriptionTextW, Heading2W } from '../../utils/Texts';
import React, { ReactElement } from 'react';

import ContactButton from '../shared/ContactButton';
import ContactPage from './ContactPage';
import { IC_DOOBOOLAB_LOGO } from '../../utils/Icons';
import { INTRO_BACKGROUND } from '../../utils/Images';
import LogoButton from '../shared/LogoButton';
import MenuButton from '../shared/MenuButton';
import PeoplePage from './PeoplePage';
import StoryPage from './StoryPage';
import WorkPage from './WorkPage';
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
  height: 120px;
  width: 100%;
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
    justify-content: space-around;
  }
`;

// 인트로 컨테이너
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  background-image: url(${INTRO_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) { 
    height: 600px;
  }

  @media (max-width: 800px) {
   height: 400px;
  }


 `;

// 텍스트 Wrapper
const TextWrapper = styled.div`
  display:flex;
  flex: 1.5;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  background-color: #000;
  background: rgba(0, 0, 0, 0.5);
`;

// 인트로 제목
const TitleWrapper = styled.div`
  width: 550px;
  height: 120px;
  padding: 10;

  @media (max-width: 1000px) { 
    width: 400px;
    height: 100px;
  }

  @media (max-width: 800px) {
   width: 320px;
   height: 80px;
  }
`;
// 인트로 내용
const DescriptionWrapper = styled.div`
  width: 500px;
  height: 50px;

  @media (max-width: 1000px) { 
    width: 400px;
    height: 40px;
  }

  @media (max-width: 800px) {
   width: 300px;
   height: 30px;
  }

`;

// 인트로 버튼
const ContactButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 1000px) { 
    flex: 0.8;
  }

  @media (max-width: 800px) {
    flex: 0.5;
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
          <MenuButton onClick={(): void => tabChange('/story')} text={getString('STORY')}/>
          <MenuButton onClick={(): void => tabChange('/work')} text={getString('WORK')}/>
          <MenuButton onClick={(): void => tabChange('/people')} text={getString('PEOPLE')}/>
          <MenuButton onClick={(): void => tabChange('/contact')} text={getString('CONTACT')}/>
        </MenuButtonWrapper>
      </MenuBarWrapper>

      <IntroContainer>
        <TextWrapper>
          <TitleWrapper>
            <Heading2W>
            Flexible innovation starts with dooboolab
            </Heading2W>
          </TitleWrapper>
          <DescriptionWrapper>
            <DescriptionTextW>
            We are a strong open source community for individuals, companies, and group of societies
            </DescriptionTextW>
          </DescriptionWrapper>
        </TextWrapper>

        <ContactButtonWrapper>
          <ContactButton text={getString('CONTACT_US')}></ContactButton>
        </ContactButtonWrapper>
      </IntroContainer>

      <StoryPage></StoryPage>

      <WorkPage></WorkPage>

      <PeoplePage></PeoplePage>

      <ContactPage></ContactPage>

    </Container>
  );
}

export default Intro;
