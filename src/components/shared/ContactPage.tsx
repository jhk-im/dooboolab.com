import { DarkMode, device } from '../../theme';
import React, { ReactElement } from 'react';
import { icSponsor, icSponsorDark } from '../../utils/icons';

import { CONTACT_BACKGROUND } from '../../utils/images';
import SendEmailRoundButton from '../shared/SendEmailRoundButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  background: ${({ theme }): string => theme.background};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TopBackgroundWrapper = styled.div`
  width: 100vw;
  height: 800px;
  background-image: url(${CONTACT_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center; 

  @media ${device.tablet} {
    height: 90vh;
  }
  
  @media ${device.laptop} {
    height: 95vh;
    flex-direction: row;
  }
`;

const SendEmailInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 3;
  background: rgba(0,0,0,0.5);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media ${device.laptop} {
    flex: 1;
  }
`;

const SendEmailTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const SendEmailInputText = styled.input`
  height: 50px;
  width: 90%;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  border: 1;
  outline: 0; 
  font-family: avenir;
  color: #ffffff;
  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0.4);
  border-radius: 6px;
  border-color: #E0E0E0;

  ::placeholder{
    color: white;
    font-family: avenir;
    font-size: 15px;
  }

  :focus{
    ::placeholder{
      color: transparent;
    }
  }
`;

const SendEmailTextArea = styled.textarea`
  height: 300px;
  padding: 10px;
  font-family: avenir;
  font-size: 15px;
  width: 90%;
  border: 1;
  outline: 0; 
  color: #ffffff;
  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0.4);
  border-radius: 6px;
  border-color: #E0E0E0;
  
  ::placeholder{
    color: white;
    font-family: avenir;
    font-size: 15px;
  }

  :focus{
    ::placeholder{
      color: transparent;
    }
  }
`;

const TextWrapper = styled.div`
  width: 280px;
  padding: 30px;
  
  @media ${device.tablet} {
    width: 300px;
    padding: 40px;
  }

  @media ${device.laptop} {
    width: 400px;
    padding: 50px;
  }
`;

const SendButtonWrapper = styled.div`
  padding: 50px;
`;

const SponsorWrapper = styled.div`
  width:90%;
  padding: 10px;
  margin-bottom: 30px;
  background: ${({ theme }): string => theme.background};
  
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
`;

const SponsorImage = styled.img`
  width: 70px;

  @media ${device.mobileL} {
    width: 80px;
  }

  @media ${device.tablet} {
    width: 100px;
  }

  @media ${device.laptop} {
    width: 120px;
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

export const H3 = styled('text')`
  font-size: 25px;
  font-family: avenir;
  color: ${({ theme }): string => theme.colorAccentLight};

  @media ${device.tablet} {
    font-size: 30px;
  }
  
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

function ContactPage(): ReactElement {
  const sponsorImages = [];

  if (DarkMode.isDark) {
    for (const value of icSponsorDark) {
      sponsorImages.push(<SponsorImage src={value}/>);
    }
  } else {
    for (const value of icSponsor) {
      sponsorImages.push(<SponsorImage src={value}/>);
    }
  }

  return (
    <Container>
      <TopBackgroundWrapper>
        <SendEmailTitleWrapper>
          <TextWrapper>
            <H1>{ getString('CONTACT_DESCRIPTION') }</H1>
          </TextWrapper>
        </SendEmailTitleWrapper>
        <SendEmailInputWrapper>
          <SendEmailInputText placeholder="Name"/>
          <SendEmailInputText placeholder="Email"/>
          <SendEmailTextArea placeholder="Message"/>
          <SendButtonWrapper>
            <SendEmailRoundButton text={ getString('SEND') }/>
          </SendButtonWrapper>
        </SendEmailInputWrapper>
      </TopBackgroundWrapper>
      <TextWrapper>
        <H3>{ getString('POWERED_BY') }</H3>
      </TextWrapper>
      <SponsorWrapper>{ sponsorImages }</SponsorWrapper>
    </Container>
  );
}

export default ContactPage;
