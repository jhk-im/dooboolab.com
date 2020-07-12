import {
  IC_COUPANG,
  IC_LUNASOFT,
  IC_MEGAZONE,
  IC_TURING,
} from '../../utils/Icons';
import React, { ReactElement } from 'react';
import { TitleText2, TitleTextWhite1 } from '../../utils/Texts';

import { CONTACT_BACKGROUND } from '../../utils/Images';
import { RoundButton1 } from '../ui/Buttons';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

// Contact
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #D2E2DF;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background: #2C2C2C;
  } 
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center; 
  width: 100%;
  height: 600px;
  background-image: url(${CONTACT_BACKGROUND});
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

// 텍스트 Wrapper
const TextWrapper = styled.div`
  width: 450px;
  padding: 20px;
  @media (max-width: 1000px) {
    width: 360px;
  }
  @media (max-width: 800px) {
    width: 270px;
  }
  @media (max-width: 600px) {
    width: 180px;
  }
`;

const ContactButtonWrapper = styled.div`
  padding: 20px;
`;

const SupportedWrapper = styled.div`
  display: flex;
  width:80%;
  padding: 40px;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
`;

const SupportImage = styled.img`
  width: 120px;
  height: 24px;
  @media (max-width: 800px) {
    width: 100px;
    height: 18px;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 12px;
  }
`;

function Intro(): ReactElement {
  return (
    <ContactContainer>
      <ContactWrapper>
        <TextWrapper>
          <TitleTextWhite1>
            Who`s next? Feel free to talk.
          </TitleTextWhite1>
        </TextWrapper>
        <ContactButtonWrapper>
          <RoundButton1>{getString('CONTACT_US')}</RoundButton1>
        </ContactButtonWrapper>
      </ContactWrapper>
      <TextWrapper>
        <TitleText2>{getString('SUPPORTED_BY')}</TitleText2>
      </TextWrapper>
      <SupportedWrapper>
        <SupportImage src={IC_COUPANG}></SupportImage>
        <SupportImage src={IC_LUNASOFT}></SupportImage>
        <SupportImage src={IC_MEGAZONE}></SupportImage>
        <SupportImage src={IC_TURING}></SupportImage>
      </SupportedWrapper>

    </ContactContainer>
  );
}

export default Intro;
