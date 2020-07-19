import { BODY1, H1 } from '../../utils/texts';
import React, { ReactElement } from 'react';

import ContactPage from './ContactPage';
import { INTRO_BACKGROUND } from '../../utils/images';
import IntroRoundButton from '../shared/IntroRoundButton';
import PeoplePage from './PeoplePage';
import StoryPage from './StoryPage';
import WorkPage from './WorkPage';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
  width: 100vw;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: left;
  width: 100vw;
  height: 600px;
  background-image: url(${INTRO_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) {
    height: 500px;
  }

  @media (max-width: 800px) {
    height: 400px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 2;
  width: 100%;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));

  @media (max-width: 800px) {
    flex: 2.5;
    align-items: center;
  }
  
  @media (max-width: 600px) {
    flex: 3;
  }
`;

const TitleWrapper = styled.div`
  width: 600px;
  padding: 10px;
  margin-left: 100px;
  line-height: 60px;
  text-align:left;

  @media (max-width: 1000px) {
    width: 500px;
    margin-left: 80px;
    line-height: 50px;
  }

  @media (max-width: 800px) {
    width: 450px;
    margin-left: 0px;
    line-height: 40px;
    text-align:center;
  }

  @media (max-width: 600px) {
    width: 350px;
    line-height: 30px;
  }
`;

const DescriptionWrapper = styled.div`
  width: 600px;
  height: 60px;
  padding: 10px;
  margin-left: 100px;
  line-height: 25px;
  text-align: left;

  @media (max-width: 1000px) {
    width: 500px;
    margin-left: 80px;
    line-height: 20px;
  }
  
  @media (max-width: 800px) {
    width: 400px;
    margin-left: 0px;
    line-height: 15px;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: top;
  flex: 1;
  width: 100%;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  margin-left: 100px;
  
  @media (max-width: 1000px) {
    margin-left: 80px;
  }
  
  @media (max-width: 800px) {
    margin-left: 0px;
  }
`;

function IntroPage(): ReactElement {
  const history = useHistory();

  const tabChange = (inputPath): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: {},
    };
    history.push(location);
  };

  return (
    <Container>
      <IntroContainer>
        <TextWrapper>
          <TitleWrapper>
            <H1>{ getString('INTRO_TITLE') }</H1>
          </TitleWrapper>
          <DescriptionWrapper>
            <BODY1>
              { getString('INTRO_DESCRIPTION') }
            </BODY1>
          </DescriptionWrapper>
        </TextWrapper>
        <ContactButtonWrapper>
          <ButtonWrapper>
            <IntroRoundButton
              text={ getString('CONTACT_US') }
              onClick={ (): void => tabChange('/contact') }/>
          </ButtonWrapper>
        </ContactButtonWrapper>
      </IntroContainer>
      <StoryPage/>
      <WorkPage/>
      <PeoplePage/>
      <ContactPage/>
    </Container>
  );
}

export default IntroPage;
