import { BODY2, H1, H3, H5 } from '../../utils/texts';
import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { VISION_BACKGROUND } from '../../utils/images';
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
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
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
  width: 100vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 20px;
  }

  @media (max-width: 800px) {
    padding: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }

  @media (prefers-color-scheme: dark) {
      background: ${darkColor.BACKGROUND};
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.BACKGROUND};
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
  width: 70%;
  padding: 20px;
  margin-bottom: 20px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  @media (prefers-color-scheme: dark) {
      background: ${darkColor.SUB_BACKGROUND};
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.SUB_BACKGROUND};
  }
`;

const VisionItemLinearWrapper = styled.div`
  width: 80vw;
  padding: 30px;
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

const VisionItemBox = styled.div`
  width: 80vw;
  max-width: 1200px;
  height: 80%;
  border: 3px solid; 
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: left;

  @media (prefers-color-scheme: dark) {
    border-color: #fff;
    border-color: rgba( 255, 255, 255, 0.1);
  }

  @media (prefers-color-scheme: light){
    border-color: #000;
    border-color: rgba( 0, 0, 0, 0.2);
  }
`;

const ItemTitleTextWrapper = styled.div`
  width: 600px;
  padding: 50px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    width: 500px;
    padding: 15px;
  }

  @media (max-width: 800px) {
    width: 400px;
    padding: 10px;
  }

  @media (max-width: 600px) {
    width: 300px;
    padding: 5px;
  }
`;

const ItemDescriptionWrapper = styled.div`
  width: 80%;
  padding: 30px;
  margin-bottom: 20px;
  line-height: 40px;

  @media (max-width: 1000px) {
    margin-bottom: 15px;
    line-height: 35px;
    padding: 25px;
  }

  @media (max-width: 800px) {
    margin-bottom: 10px;
    line-height: 30px;
    padding: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 5px;
    line-height: 25px;
    padding: 15px;
  }
`;

function Vision(): ReactElement {
  return (
    <Container>
      <HeaderBackgroundWrapper>
        <HeaderTitleTextWrapper>
          <H1>{ getString('VISION_MISSION') }</H1>
        </HeaderTitleTextWrapper>
      </HeaderBackgroundWrapper>
      <SubTitleWrapper>
        <TitleTextWrapper>
          <H3>{ getString('OUR_MISSION') }</H3>
        </TitleTextWrapper>
        <DescriptionWrapper>
          <BODY2>
            { getString('MISSION_DESCRIPTION') }
          </BODY2>
        </DescriptionWrapper>
      </SubTitleWrapper>
      <VisionListWrapper>
        <ItemTitleTextWrapper>
          <H5>
            { getString('MISSION_SUBTITLE_01') }
          </H5>
        </ItemTitleTextWrapper>
        <VisionItemLinearWrapper>
          <VisionItem>
            <VisionItemBox>
              <ItemDescriptionWrapper>
                <BODY2>
                  { getString('MISSION_DESCRIPTION_01_1') }<br/>
                  { getString('MISSION_DESCRIPTION_01_2') }<br/>
                  { getString('MISSION_DESCRIPTION_01_3') }<br/>
                  { getString('MISSION_DESCRIPTION_01_4') }<br/>
                  { getString('MISSION_DESCRIPTION_01_5') }<br/>
                  { getString('MISSION_DESCRIPTION_01_6') }<br/>
                  { getString('MISSION_DESCRIPTION_01_7') }
                </BODY2>
              </ItemDescriptionWrapper>
            </VisionItemBox>
          </VisionItem>
        </VisionItemLinearWrapper>
        <ItemTitleTextWrapper>
          <H5>
            { getString('MISSION_SUBTITLE_02') }
          </H5>
        </ItemTitleTextWrapper>
        <VisionItemLinearWrapper>
          <VisionItem>
            <VisionItemBox>
              <ItemDescriptionWrapper>
                <BODY2>
                  { getString('MISSION_DESCRIPTION_02_1') }<br/>
                  { getString('MISSION_DESCRIPTION_02_2') }<br/>
                  { getString('MISSION_DESCRIPTION_02_3') }<br/>
                  { getString('MISSION_DESCRIPTION_02_4') }<br/>
                  { getString('MISSION_DESCRIPTION_02_5') }<br/>
                  { getString('MISSION_DESCRIPTION_02_6') }
                </BODY2>
              </ItemDescriptionWrapper>
            </VisionItemBox>
          </VisionItem>
        </VisionItemLinearWrapper>
      </VisionListWrapper>
    </Container>
  );
}

export default Vision;
