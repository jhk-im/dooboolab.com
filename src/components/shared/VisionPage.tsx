import React, { ReactElement } from 'react';

import { VISION_BACKGROUND } from '../../utils/images';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;

  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderBackgroundWrapper = styled.div`
  width: 100vw;
  height: 300px;
  background-image: url(${VISION_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  @media ${device.tablet} {
    height: 400px;
  }

  @media ${device.laptop} {
    height: 500px;
  }
`;

const HeaderTitleTextWrapper = styled.div`
  width: 300px;
  padding: 40px;

  @media ${device.tablet} {
    width: 400px;
    padding: 50px;
  }

  @media ${device.laptop} {
    width: 500px;
    padding: 60px;
  }
`;

const SubTitleWrapper = styled.div`
  width: 100vw;
  padding: 10px;
  background: ${({ theme }): string => theme.subBackground};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: 20px;
  }

  @media ${device.laptop} {
    padding: 30px;
  }
`;

const TitleTextWrapper = styled.div`
  padding: 30px;

  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  @media (max-width: 1000px) {
    padding: 20px;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 70%;
  padding: 20px;
  margin-bottom: 5px;
    line-height: 15px;

  @media ${device.tablet} {
    margin-bottom: 10px;
    line-height: 20px;
  }
  
  @media ${device.laptop} {
    margin-bottom: 15px;
    line-height: 25px;
  }
`;

const VisionListWrapper = styled.div`
  width: 100vw;
  padding: 20px;
  background: ${({ theme }): string => theme.background};
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const VisionItemLinearWrapper = styled.div`
  width: 80vw;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center; 
`;

const VisionItem = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VisionNumberWrapper = styled.div`
  width: 100px;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center; 
`;

const VisionItemBox = styled.div`
  height: 80%;
  width: 80vw;
  margin-bottom: 30px;
  border: 3px solid; 
  border-radius: 10px;
  border-color: ${({ theme }): string => theme.itemBox};

  display: flex;
  align-items: center;
  justify-content: center; 

  @media ${device.tablet} {
    margin-bottom: 40px;
    max-width: 600px;
  }

  @media ${device.laptop} {
    margin-bottom: 50px;
    max-width: 800px;
  }
`;

const ItemDescriptionWrapper = styled.div`
  width: 70%;
  margin-bottom: 5px;
  line-height: 15px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media ${device.tablet} {
    margin-bottom: 10px;
    line-height: 20px;
    padding: 20px;
  }
  @media ${device.laptop} {
    margin-bottom: 15px;
    line-height: 25px;
    padding: 25px;
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

export const BODY2 = styled('text')`
  font-size: 15px;
  font-family: avenir;
  font-weight: lighter;
  color: ${({ theme }): string => theme.btnPrimaryLightFont};

  @media ${device.tablet} {
    font-size: 18px;
  }
  
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const H3 = styled('text')`
  font-size: 25px;
  font-family: avenir;

  @media ${device.tablet} {
    font-size: 30px;
  }
  
  @media ${device.laptop} {
    font-size: 35px;
  }

  @media (prefers-color-scheme: dark) {
    color: #8A96DC;
  }

  @media (prefers-color-scheme: light){
    color: #393D7A;
  }
`;

export const H5 = styled('text')`
  font-size: 20px;
  font-family: futura;

  @media ${device.tablet} {
    font-size: 25px;
  }
  
  @media ${device.laptop} {
    font-size: 30px;
  }

  @media (prefers-color-scheme: dark) {
    color: #8A96DC;
  }

  @media (prefers-color-scheme: light){
    color: #393D7A;
  }
`;

const visionTexts = [
  getString('VISION_01'),
  getString('VISION_02'),
  getString('VISION_03'),
  getString('VISION_04'),
  getString('VISION_05'),
  getString('VISION_06'),
  getString('VISION_07'),
];

function Vision(): ReactElement {
  const visionWrappers = [];

  for (const value of visionTexts) {
    visionWrappers.push(
      <VisionItem>
        <VisionNumberWrapper>
          <H5>0{ visionTexts.indexOf(value) + 1 }</H5>
        </VisionNumberWrapper>
        <VisionItemBox>
          <ItemDescriptionWrapper>
            <BODY2>
              { value }
            </BODY2>
          </ItemDescriptionWrapper>
        </VisionItemBox>
      </VisionItem>,
    );
  }

  return (
    <Container>
      <HeaderBackgroundWrapper>
        <HeaderTitleTextWrapper>
          <H1>{ getString('VISION_MISSION') }</H1>
        </HeaderTitleTextWrapper>
      </HeaderBackgroundWrapper>
      <SubTitleWrapper>
        <TitleTextWrapper>
          <H3>{ getString('OUR_VISION') }</H3>
        </TitleTextWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('VISION_MISSION_DESCRIPTION') }</BODY2>
        </DescriptionWrapper>
      </SubTitleWrapper>
      <VisionListWrapper>
        <VisionItemLinearWrapper>{ visionWrappers }</VisionItemLinearWrapper>
      </VisionListWrapper>
    </Container>
  );
}

export default Vision;
