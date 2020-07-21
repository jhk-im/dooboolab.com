import React, { ReactElement } from 'react';

import ContactPage from './ContactPage';
import { INTRO_BACKGROUND } from '../../utils/images';
import IntroRoundButton from '../shared/IntroRoundButton';
import PeoplePage from './PeoplePage';
import StoryPage from './StoryPage';
import WorkPage from './WorkPage';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useThemeContext } from '../../providers/ThemeProvider';

const Container = styled.div`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
`;

const IntroContainer = styled.div`
  width: 100vw;
  height: 400px;
  background-image: url(${INTRO_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: left;

  @media ${device.tablet} {
    height: 80vh;
    min-height: 600px;
    flex: 2;
    align-items: flex-start;
  }
  @media ${device.laptop} {
    height: 95vh;
    min-height: 700px;
    flex: 1.5;
    align-items: flex-start;
  }
`;

const TextWrapper = styled.div`
  flex: 2;  
  width: 100%;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media ${device.tablet} {
    flex: 1.8;
    align-items: flex-start;
  }
  
  @media ${device.laptop} {
    flex: 1.5;
    align-items: flex-start;
  }
`;

const TitleWrapper = styled.div`
  width: 400px;
  padding: 10px;
  line-height: 40px;
  margin-left: 0px;
  text-align:center;
  
  @media ${device.tablet} {
    width: 450px;
    margin-left: 80px;
    line-height: 50px;
    text-align: left;
  }
  @media ${device.laptop} {
    width: 600px;
    margin-left: 100px;
    line-height: 60px;
    text-align:left;
  }
`;

const DescriptionWrapper = styled.div`
  width: 400px;
  padding: 10px;
  margin-left: 0px;
  line-height: 20px;

  @media ${device.tablet} {
    width: 500px;
    padding: 10px;
    margin-left: 80px;
    line-height: 25px;
    text-align: left;
  }
  @media ${device.laptop} {
    width: 600px;
    height: 60px;
    padding: 10px;
    margin-left: 100px;
    line-height: 30px;
    text-align: left;
  }
`;

const ContactButtonWrapper = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));
  
  display: flex;
  justify-content: center;
  align-items: top;

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  margin-left: 0px;
  margin-top: 30px;
  
  @media ${device.tablet} {
    margin-left: 80px;
    margin-top: 20px;
  }
  
  @media ${device.laptop} {
    margin-left: 100px;
    margin-top: 20px;
  }
`;

export const H1 = styled('text')`
  font-size: 35px;
  font-family: futura;
  font-weight: 300;
  color: ${({ theme }): string => theme.btnPrimaryLight};

  @media ${device.tablet} {
    font-size: 40px;
  }

  @media ${device.laptop} {
    font-size: 50px;
  }
`;

export const BODY1 = styled('text')`
  font-size: 15px;
  font-family: avenir;
  font-weight: lighter;
  color: ${({ theme }): string => theme.btnPrimaryLight};
  
  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

function IntroPage(): ReactElement {
  const history = useHistory();
  const { changeThemeType } = useThemeContext();

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
          <TitleWrapper onClick={(): void => changeThemeType()}>
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
