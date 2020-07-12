import { BODY1, H1 } from '../../utils/Texts';
import React, { ReactElement } from 'react';

import ContactPage from './ContactPage';
import Footer from '../shared/Footer';
import { INTRO_BACKGROUND } from '../../utils/Images';
import MenuBar from '../shared/MenuBar';
import PeoplePage from './PeoplePage';
import { RoundButton1 } from '../ui/Buttons';
import StoryPage from './StoryPage';
import WorkPage from './WorkPage';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

// 최상위 컨테이너
const Container = styled.div`
  display: flex;
  width: 100vw;
  align-self: stretch;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
`;

const MenubarTemp = styled.div`
  height:120px;
  width:100%;
`;

// 인트로 컨테이너
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: left;
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

  @media (max-width: 600px) {
    height: 300px;
  }
`;

// 텍스트 Wrapper
const TextWrapper = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));

  @media (max-width: 800px) {
    flex: 2.5;
  }
  @media (max-width: 600px) {
    flex: 3;
  }

`;

// 인트로 제목
const TitleWrapper = styled.div`
  width: 600px;
  padding: 10px;
  text-align:left;
  margin-left: 100px;
  @media (max-width: 1000px) {
    width: 500px;
    margin-left: 80px;
  }
  @media (max-width: 800px) {
    width: 400px;
    margin-left: 60px;
  }
  @media (max-width: 600px) {
    width: 250px;
    margin-left: 40px;
  }
`;
// 인트로 내용
const DescriptionWrapper = styled.div`
  width: 600px;
  height: 60px;
  padding: 10px;
  text-align: left;
  margin-left: 100px;
  @media (max-width: 1000px) {
    width: 500px;
    margin-left: 80px;
  }
  @media (max-width: 800px) {
    width: 400px;
    margin-left: 60px;
  }
  @media (max-width: 600px) {
    width: 300px;
    margin-left: 40px;
  }
`;

// 인트로 버튼
const ContactButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: top;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  margin-left: 100px;
  @media (max-width: 1000px) {
    margin-left: 80px;
  }
  @media (max-width: 800px) {
    margin-left: 60px;
  }
  @media (max-width: 600px) {
    margin-left: 40px;
  }
`;

function Intro(): ReactElement {
  return (
    <Container>

      <MenuBar/>

      <MenubarTemp/>

      <IntroContainer>
        <TextWrapper>
          <TitleWrapper>
            <H1>Flexible innovation starts with dooboolab?</H1>
          </TitleWrapper>
          <DescriptionWrapper>
            <BODY1>
              We are a strong open source community for individuals, companies,
              and group of societies.
            </BODY1>
          </DescriptionWrapper>
        </TextWrapper>

        <ContactButtonWrapper>
          <ButtonWrapper>
            <RoundButton1>{getString('CONTACT_US')}</RoundButton1>
          </ButtonWrapper>
        </ContactButtonWrapper>
      </IntroContainer>

      <StoryPage/>

      <WorkPage/>

      <PeoplePage/>

      <ContactPage/>

      <Footer/>

    </Container>
  );
}

export default Intro;
