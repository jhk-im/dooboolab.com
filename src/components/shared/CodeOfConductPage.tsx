import React, { ReactElement } from 'react';

import { VISION_BACKGROUND } from '../../utils/images';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

interface Props {
  id?: string;
}

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
    padding: 15px;
  }

  @media ${device.laptop} {
    padding: 20px;
  }
`;

const DescriptionWrapper = styled.div`
  width: 90%;
  padding: 20px;
  margin-bottom: 5px;
  line-height: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media ${device.mobileL} {
    margin-bottom: 10px;
    line-height: 25px;
  }

  @media ${device.tablet} {
    margin-bottom: 10px;
    line-height: 30px;
  }

  @media ${device.laptop} {
    margin-bottom: 15px;
    line-height: 35px;
  }
`;

const ConductListWrapper = styled.div`
  width: 100vw;
  padding: 50px;
  background: ${({ theme }): string => theme.background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ConductItemLinearWrapper = styled.div`
  width: 90vw;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center; 
`;

const ConductItem = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConductItemBox = styled.div`
  width: 90vw;
  text-align: left;
  border: 3px solid; 
  border-radius: 10px;
  border-color: ${({ theme }): string => theme.itemBox};
  
  display: flex;
  align-items: center;
  justify-content: center; 

  @media ${device.tablet} {
    max-width: 800px;
  }

  @media ${device.laptop} {
    max-width: 1200px;
  }
`;

const ItemTitleTextWrapper = styled.div`
  width: 80%;
  padding: 5px;
  margin-top: 10px;
  line-height: 30px;

  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    line-height: 15px;
  }

  @media ${device.mobileM} {
    padding: 5px;
    line-height: 20px;
  }

  @media ${device.mobileL} {
    padding: 10px;
    line-height: 25px;
  }

  @media ${device.tablet} {
    padding: 10px;
    line-height: 35px;
  }

  @media ${device.laptop} {
    padding: 15px;
    line-height: 40px;
  }
`;

const ItemDescriptionWrapper = styled.div`
  width: 80%;
  margin-bottom: 5px;
  line-height: 25px;
  padding: 15px;

  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin-bottom: 10px;
    line-height: 30px;
    padding: 20px;
  }

  @media ${device.laptop} {
    margin-bottom: 15px;
    line-height: 35px;
    padding: 25px;
  }
`;
const ItemDescriptionTextWrapper = styled.div`
  width: 100%;

  display: flex;
`;

export const H1 = styled.text`
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

export const BODY2 = styled.text`
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

export const H5 = styled.text`
  font-size: 15px;
  font-family: futura;
  color: ${({ theme }): string => theme.colorAccentLight};


  @media ${device.tablet} {
    font-size: 20px;
  }
  
  @media ${device.laptop} {
    font-size: 30px;
  }
`;

function CodeOfConduct(props: Props): ReactElement {
  const { id } = props;

  return (
    <Container id={ id }>
      <HeaderBackgroundWrapper>
        <HeaderTitleTextWrapper>
          <H1>{ getString('CODE_OF_CONDUCT') }</H1>
        </HeaderTitleTextWrapper>
      </HeaderBackgroundWrapper>
      <SubTitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('MISSION_DESCRIPTION_1') }</BODY2>
          <BODY2>{ getString('MISSION_DESCRIPTION_2') }</BODY2>
          <BODY2>{ getString('MISSION_DESCRIPTION_3') }</BODY2>
          <BODY2>{ getString('MISSION_DESCRIPTION_4') }</BODY2>
        </DescriptionWrapper>
      </SubTitleWrapper>
      <ConductListWrapper>
        <ItemTitleTextWrapper>
          <H5>{ getString('MISSION_SUBTITLE_01_1') }</H5>
          <H5>{ getString('MISSION_SUBTITLE_01_2') }</H5>
          <H5>{ getString('MISSION_SUBTITLE_01_3') }</H5>
        </ItemTitleTextWrapper>
        <ConductItemLinearWrapper>
          <ConductItem>
            <ConductItemBox>
              <ItemDescriptionWrapper>
                <BODY2>
                  <ItemDescriptionTextWrapper>
                    <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_01_1') }</BODY2>
                  </ItemDescriptionTextWrapper>
                  <ItemDescriptionTextWrapper>
                    <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_01_2') }</BODY2>
                  </ItemDescriptionTextWrapper>
                  <ItemDescriptionTextWrapper>
                    <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_01_3') }</BODY2>
                  </ItemDescriptionTextWrapper>
                  <ItemDescriptionTextWrapper>
                    <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_01_4') }</BODY2>
                  </ItemDescriptionTextWrapper>
                  <ItemDescriptionTextWrapper>
                    <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_01_5') }</BODY2>
                  </ItemDescriptionTextWrapper>
                  <ItemDescriptionTextWrapper>
                    <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_01_6') }</BODY2>
                  </ItemDescriptionTextWrapper>
                  <ItemDescriptionTextWrapper>
                    <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_01_7') }</BODY2>
                  </ItemDescriptionTextWrapper>
                </BODY2>
              </ItemDescriptionWrapper>
            </ConductItemBox>
          </ConductItem>
        </ConductItemLinearWrapper>
        <ItemTitleTextWrapper>
          <H5>{ getString('MISSION_SUBTITLE_02_1') }</H5>
          <H5>{ getString('MISSION_SUBTITLE_02_2') }</H5>
        </ItemTitleTextWrapper>
        <ConductItemLinearWrapper>
          <ConductItem>
            <ConductItemBox>
              <ItemDescriptionWrapper>
                <ItemDescriptionTextWrapper>
                  <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_02_1') }</BODY2>
                </ItemDescriptionTextWrapper>
                <ItemDescriptionTextWrapper>
                  <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_02_2') }</BODY2>
                </ItemDescriptionTextWrapper>
                <ItemDescriptionTextWrapper>
                  <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_02_3') }</BODY2>
                </ItemDescriptionTextWrapper>
                <ItemDescriptionTextWrapper>
                  <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_02_4') }</BODY2>
                </ItemDescriptionTextWrapper>
                <ItemDescriptionTextWrapper>
                  <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_02_5') }</BODY2>
                </ItemDescriptionTextWrapper>
                <ItemDescriptionTextWrapper>
                  <BODY2>•&ensp;</BODY2><BODY2>{ getString('MISSION_DESCRIPTION_02_6') }</BODY2>
                </ItemDescriptionTextWrapper>
              </ItemDescriptionWrapper>
            </ConductItemBox>
          </ConductItem>
        </ConductItemLinearWrapper>
      </ConductListWrapper>
    </Container>
  );
}

export default CodeOfConduct;
