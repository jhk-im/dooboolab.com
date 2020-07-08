import { DescriptionText, Heading1 } from '../../utils/Texts';
import {
  IC_COUPANG,
  IC_GRAPHQLSEOUL,
  IC_LUNASOFT,
  IC_MEGAZONE,
  IC_REACTNATIVESEOUL,
  IC_TURING,
} from '../../utils/Icons';
import React, { ReactElement } from 'react';

import styled from 'styled-components';

// 스토리 컨테이너
const StoryContainer = styled.div`
  margin-top:180px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
   margin-top:150px;
  }

`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const StroyDescriptionWrapper = styled.div`
  display: flex;
  width: 550px;
  padding: 20px;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

const VisionDescriptionWrapper = styled.div`
  display: flex;
  width: 520px;
  padding: 20px;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 350px;
  }
  
`;

const CommunityDescriptionWrapper = styled.div`
  display: flex;
  width: 450px;
  padding: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 250px;
  }
  
`;

const CommunityImageWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const CommunityImage = styled.img`
  padding: 10px;
  width: 400px;
  height: 400px;

  @media (max-width: 1000px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }

`;

const SupportedWrapper = styled.div`
  display: flex;
  padding: 30px;
  width:100%;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
`;

const SupportImage = styled.img`
  padding: 10px;
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

    <StoryContainer>
      <TitleWrapper>
        <Heading1>Story</Heading1>
      </TitleWrapper>
      <StroyDescriptionWrapper>
        <DescriptionText>
            We aim to find the IT services that the world needs.<br/>
            The goal is to consistently find and commercialize ideas
            that have the potential to change the market.
        </DescriptionText>
      </StroyDescriptionWrapper>
      <TitleWrapper>
        <Heading1>Vision & Mission</Heading1>
      </TitleWrapper>
      <VisionDescriptionWrapper>
        <DescriptionText>
            dooboolab wishes to help out those
            who are in trouble of making better society
            We are a group of experts who contribute to various platforms and open source projects
            to work publicly for creating benefits.
        </DescriptionText>
      </VisionDescriptionWrapper>
      <TitleWrapper>
        <Heading1>Community</Heading1>
      </TitleWrapper>
      <CommunityDescriptionWrapper>
        <DescriptionText>
            We are running a strong open source community
            for individuals, companies, and group of societies
        </DescriptionText>
      </CommunityDescriptionWrapper>
      <CommunityImageWrapper>
        <CommunityImage src={IC_GRAPHQLSEOUL}></CommunityImage>
        <CommunityImage src={IC_REACTNATIVESEOUL}></CommunityImage>
      </CommunityImageWrapper>
      <TitleWrapper>
        <Heading1>Supported by</Heading1>
      </TitleWrapper>
      <SupportedWrapper>
        <SupportImage src={IC_COUPANG}></SupportImage>
        <SupportImage src={IC_LUNASOFT}></SupportImage>
        <SupportImage src={IC_MEGAZONE}></SupportImage>
        <SupportImage src={IC_TURING}></SupportImage>
      </SupportedWrapper>
    </StoryContainer>

  );
}

export default Intro;
