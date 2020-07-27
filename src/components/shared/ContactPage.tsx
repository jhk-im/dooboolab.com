import React, { ReactElement, useState } from 'react';
import { device, icon } from '../../theme';

import { CONTACT_BACKGROUND } from '../../utils/images';
import SendEmailRoundButton from '../shared/SendEmailRoundButton';
import firebase from 'firebase/app';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { validateEmail } from '../../utils/functions';

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
  flex-direction: column;
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
    color: #ccc;
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
    color: #ccc;
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
  width: 90%;
  padding: 20px;
`;

const SendButtonWrapper = styled.div`
  width: 90%;
  padding: 20px;
  
  display: flex;
  justify-content: flex-end;
`;

const SponsorWrapper = styled.div`
  width:90%;
  margin-bottom: 30px;
  background: ${({ theme }): string => theme.subBackground};
  
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SponsorImage = styled.img`
  height: 28px;
  margin: 8px 24px;
`;

export const H1 = styled.text`
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

export const H3 = styled.text`
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
  const { id } = props;
  const sponsors = icon.sponsors;
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const sendContact = async (): Promise<void> => {
    if (!name || !email || !message) return;

    if (!validateEmail(email)) {
      alert(getString('EMAIL_NOT_VALID'));
      return;
    }

    const db = firebase.firestore();

    try {
      setLoading(true);
      await db.collection('contacts')
        .add({ email, name, message });

      alert(getString('SUCCESS_SENDING_STORY'));

      setEmail('');
      setName('');
      setMessage('');
    } catch (err) {
      alert(`Failed sending contacts.\n${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TopBackgroundWrapper>
        <SendEmailTitleWrapper>
          <TextWrapper>
            <H1>{ getString('CONTACT_DESCRIPTION_1') }</H1>
          </TextWrapper>
          <TextWrapper>
            <H1>{ getString('CONTACT_DESCRIPTION_2') }</H1>
          </TextWrapper>
        </SendEmailTitleWrapper>
        <SendEmailInputWrapper>
          <SendEmailInputText
            placeholder={getString('PLZ_WRITE_NAME')}
            value={name}
            onChange={(e): void => {
              setName(e.target.value);
            }}
          />
          <SendEmailInputText
            placeholder="email@email.com"
            value={email}
            onChange={(e): void => {
              setEmail(e.target.value);
            }}
          />
          <SendEmailTextArea
            placeholder={getString('TELL_US_YOUR_STORY')}
            value={message}
            onChange={(e): void => {
              setMessage(e.target.value);
            }}
          />
          <SendButtonWrapper>
            <SendEmailRoundButton
              loading={loading}
              text={ getString('SEND') }
              onClick={sendContact}
            />
          </SendButtonWrapper>
        </SendEmailInputWrapper>
      </TopBackgroundWrapper>
      <TextWrapper>
        <H3>{ getString('POWERED_BY') }</H3>
      </TextWrapper>
      <SponsorWrapper>
        {
          sponsors.map((sponsor, i) => {
            if (i === 3) { // Turing icon is bigger than others
              return <SponsorImage key={i} src={sponsor} style={{
                height: 20,
              }}/>;
            }
            return <SponsorImage key={i} src={sponsor}/>;
          })
        }
      </SponsorWrapper>
    </Container>
  );
}

export default ContactPage;
