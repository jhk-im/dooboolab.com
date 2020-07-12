import { DescriptionText1, TitleText1, TitleText2 } from '../../utils/Texts';
import {
  IC_GRAPHQLSEOUL,
  IC_REACTNATIVESEOUL,
} from '../../utils/Icons';
import React, { ReactElement } from 'react';

import { LearnMoreButton } from '../ui/Buttons';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

// 스토리 컨테이너
const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }
`;

const StoryContainer = styled.div`
  width: 100vw;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background: #232323;
  }
`;

const StroyDescriptionWrapper = styled.div`
  display: flex;
  width: 550px;
  padding: 10px;
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
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

const CommunityContainer = styled.div`
  padding: 100px;
  width: 100vw;
  background: #EBEAF4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background: #2C2C2C;
  }
`;

const CommunityDescriptionWrapper = styled.div`
  width: 450px;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 250px;
  }
`;

const CommunityImageListWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const GraphQlImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 400px;
  height: 400px;
  background-image: url(${IC_GRAPHQLSEOUL});
  background-repeat: no-repeat;
  background-size: cover;  
  @media (max-width: 1000px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }
`;

const ReactNativeImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 400px;
  height: 400px;
  background-image: url(${IC_REACTNATIVESEOUL});
  background-repeat: no-repeat;
  background-size: cover;  
  @media (max-width: 1000px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }
`;

const ItemButtonWrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (max-width: 1000px) {
    padding: 20px;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

function Intro(): ReactElement {
  return (

    <Container>

      <StoryContainer>
        <TitleWrapper>
          <TitleText1>Story</TitleText1>
        </TitleWrapper>
        <StroyDescriptionWrapper>
          <DescriptionText1>
            We aim to find the IT services that the world needs.<br/>
            The goal is to consistently find and commercialize ideas
            that have the potential to change the market.
          </DescriptionText1>
        </StroyDescriptionWrapper>
        <TitleWrapper>
          <TitleText2>vision & mission</TitleText2>
        </TitleWrapper>
        <VisionDescriptionWrapper>
          <DescriptionText1>
            dooboolab wishes to help out those
            who are in trouble of making better society
            We are a group of experts who contribute to various platforms and open source projects
            to work publicly for creating benefits.
          </DescriptionText1>
        </VisionDescriptionWrapper>
      </StoryContainer>

      <CommunityContainer>
        <TitleWrapper>
          <TitleText2>Community</TitleText2>
        </TitleWrapper>
        <CommunityDescriptionWrapper>
          <DescriptionText1>
            We are running a strong open source community
            for individuals, companies, and group of societies
          </DescriptionText1>
        </CommunityDescriptionWrapper>
        <CommunityImageListWrapper>
          <ReactNativeImageWrapper>
            <ItemButtonWrapper>
              <LearnMoreButton>{getString('LEARN_MORE')}</LearnMoreButton>
            </ItemButtonWrapper>
          </ReactNativeImageWrapper>
          <GraphQlImageWrapper>
            <ItemButtonWrapper>
              <LearnMoreButton>{getString('LEARN_MORE')}</LearnMoreButton>
            </ItemButtonWrapper>
          </GraphQlImageWrapper>
        </CommunityImageListWrapper>
      </CommunityContainer>

    </Container>

  );
}

export default Intro;
