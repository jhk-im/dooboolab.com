import { Icon, device } from '../../theme';
import React, { ReactElement } from 'react';

import { CONTACT_BACKGROUND } from '../../utils/images';
import SendEmailRoundButton from '../shared/SendEmailRoundButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

interface Props {
  id?: string;
}

const Container = styled.div`
  width: 100vw;
  background: ${({ theme }): string => theme.subBackground};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TopBackgroundWrapper = styled.div`
  width: 100vw;
  height: 600px;
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
  height: 200px;
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
  width: 230px;
  padding: 30px;
  
  @media ${device.mobileL} {
    width: 240px;
    padding: 30px;
  }

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
  width: 90%;
  padding: 20px;
  
  display: flex;
  justify-content: flex-end;
`;

const SponsorWrapper = styled.div`
  width:90%;
  padding: 10px;
  margin-bottom: 30px;
  background: ${({ theme }): string => theme.subBackground};
  
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
`;

const SponsorImage = styled.img`
  width: 60px;

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
  font-size: 30px;
  font-family: futura;
  font-weight: 300;
  color: ${({ theme }): string => theme.btnPrimaryLight};

  @media ${device.mobileL} {
    width: 35px;
  }

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

function ContactPage(props: Props): ReactElement {
  const sponsorImages = [];
  const { id } = props;

  for (const value of Icon.sponsor) {
    sponsorImages.push(<SponsorImage src={value}/>);
  }

  return (
    <Container id={ id }>
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
