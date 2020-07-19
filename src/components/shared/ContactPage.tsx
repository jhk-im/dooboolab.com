import { H1, H3 } from '../../utils/texts';
import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { CONTACT_BACKGROUND } from '../../utils/images';
import { IC_SPONSORS } from '../../utils/icons';
import SendEmailRoundButton from '../shared/SendEmailRoundButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    background: ${darkColor.SUB_BACKGROUND};
  }

  @media (prefers-color-scheme: light){
    background: ${lightColor.SUB_BACKGROUND};
  }
`;

const TopBackgroundWrapper = styled.div`
  width: 100vw;
  height: 800px;
  background-image: url(${CONTACT_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center; 

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const SendEmailInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background: rgba(0,0,0,0.5);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex: 3;
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
  width: 400px;
  padding: 20px;
  
  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 800px) {
    width: 280px;
  }

  @media (max-width: 600px) {
    width: 230px;
  }
`;

const SendButtonWrapper = styled.div`
  padding: 50px;
`;

const SponsorWrapper = styled.div`
  width:80%;
  padding: 5px;

  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    background: ${darkColor.SUB_BACKGROUND};
  }

  @media (prefers-color-scheme: light){
    background: ${lightColor.SUB_BACKGROUND};
  }
`;

const SponsorImage = styled.img`
  width: 150px;
  padding: 20px;

  @media (max-width: 1000px) {
    width: 120px;
  }

  @media (max-width: 800px) {
    width: 100px;
  }

  @media (max-width: 600px) {
    width: 80px;
  }
`;

function ContactPage(): ReactElement {
  const sponsorImages = [];

  for (const value of IC_SPONSORS) {
    sponsorImages.push(<SponsorImage src={value}/>);
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
