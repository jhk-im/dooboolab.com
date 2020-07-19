import { BODY2, H1, H3, H5 } from '../../utils/texts';
import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { VISION_BACKGROUND } from '../../utils/images';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
`;

const HeaderBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 500px;
  background-image: url(${VISION_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) {
    height: 400px;
  }

  @media (max-width: 800px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const HeaderTitleTextWrapper = styled.div`
  width: 600px;
  padding: 80px;
  
  @media (max-width: 1000px) {
    width: 500px;
    padding: 60px;
  }
  @media (max-width: 800px) {
    width: 400px;
    padding: 40px;
  }
  @media (max-width: 600px) {
    width: 250px;
    padding: 30px;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 30px;

  @media (max-width: 1000px) {
    padding: 20px;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 5px;
  }

  @media (prefers-color-scheme: dark) {
      background: ${darkColor.BACKGROUND};
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.BACKGROUND};
  }
`;

const TitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 30px;
  
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
  margin-bottom: 20px;
  line-height: 30px;

  @media (max-width: 1000px) {
    margin-bottom: 15px;
    line-height: 25px;
  }

  @media (max-width: 800px) {
    margin-bottom: 10px;
    line-height: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 5px;
    line-height: 15px;
  }
`;

const VisionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  
  @media (prefers-color-scheme: dark) {
      background: ${darkColor.SUB_BACKGROUND};
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.SUB_BACKGROUND};
  }
`;

const VisionItemLinearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center; 
  width: 80vw;
  padding: 30px;
`;

const VisionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const VisionNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100px;
  padding: 20px;
`;

const VisionItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 80vw;
  height: 80%;
  border: 3px solid; 
  border-radius: 10px;

  @media (prefers-color-scheme: dark) {
    border-color: #fff;
    border-color: rgba( 255, 255, 255, 0.1);
  }

  @media (prefers-color-scheme: light){
    border-color: #000;
    border-color: rgba( 0, 0, 0, 0.2);
  }
`;

const ItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 80%;
  padding: 30px;
  margin-bottom: 20px;
  line-height: 30px;

  @media (max-width: 1000px) {
    margin-bottom: 15px;
    line-height: 25px;
    padding: 25px;
  }

  @media (max-width: 800px) {
    margin-bottom: 10px;
    line-height: 20px;
    padding: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 5px;
    line-height: 15px;
    padding: 15px;
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
