import { IC_DOOBOO_UI, IC_HACKATALK, IC_PRIME } from '../../utils/Icons';
import React, { ReactElement } from 'react';

import RoundButton2 from '../shared/RoundButton2';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

// Work 컨테이너
const WorkContainer = styled.div`
  padding: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    background: #232323;
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

  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }
`;

const WorkDescriptionWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 25px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

`;

const WorkItemListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  padding: 20px;

  @media (max-width: 1000px) {
    width: 80%
  }
`;

const WorkItemWrapper = styled.div`
  padding: 10px;
  width: 250px;
  height: 320px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: #EDEDED;
  border-radius: 10px;
  border-style: solid;;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 220px;
    height: 320px;
  }
  @media (max-width: 800px) {
    width: 220px;
  height: 320px;
  }
  @media (max-width: 600px) {
  }

  @media (prefers-color-scheme: dark) {
    background: #2C2C2C;
    border-color: #ffffff;
    border-color: rgba(255, 255, 255, 0);
  }

`;

const WorkImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const WorkImage = styled.img`
  padding: 10px;
  width: auto;
  height: auto;
  max-width: 130px;
  max-height: 40px;
`;

const WorkTextWrapper = styled.div`
  display: flex;
  flex: 3;
  width: 200px;
  justify-content: top;
  align-items: center;
  padding: 10px;
`;

export const TitleText1 = styled('text')`
  font-size: 40px;
  font-weight: bold;
  font-family: futura;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const DescriptionText = styled.text`
  font-size: 18px;
  line-height: 25px;
  font-family: avenir;
  color: #545966;
  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }
`;

const ItemButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

function Work(): ReactElement {
  // 외부링크 변경 메소드
  const moveUrl = (inputPath): void => {
    window.open(inputPath);
  };
  return (
    <WorkContainer>
      <TitleWrapper>
        <TitleText1>Work</TitleText1>
      </TitleWrapper>
      <WorkDescriptionWrapper>
        <DescriptionText>
            We are a group of experts in IT technology development.
        </DescriptionText>
      </WorkDescriptionWrapper>

      <WorkItemListWrapper>
        <WorkItemWrapper>
          <WorkImageWrapper>
            <WorkImage src={IC_PRIME}/>
          </WorkImageWrapper>
          <WorkTextWrapper>
            <DescriptionText>
              Comming Soon! :)
            </DescriptionText>
          </WorkTextWrapper>
        </WorkItemWrapper>

        <WorkItemWrapper>
          <WorkImageWrapper>
            <WorkImage src={IC_DOOBOO_UI}/>
          </WorkImageWrapper>
          <WorkTextWrapper>
            <DescriptionText>
            We love react-hooks and willing to share our react-native ui components
            built in functional components using hooks.
            </DescriptionText>
          </WorkTextWrapper>
          <ItemButtonWrapper>
            <RoundButton2
              text={getString('VIEW_MORE')}
              onClick={(): void => moveUrl('https://github.com/dooboolab/dooboo-ui')}
            />
          </ItemButtonWrapper>
        </WorkItemWrapper>

        <WorkItemWrapper>
          <WorkImageWrapper>
            <WorkImage src={IC_HACKATALK}/>
          </WorkImageWrapper>
          <WorkTextWrapper>
            <DescriptionText>
            Open source chat app built in expo bare work flow.
            </DescriptionText>
          </WorkTextWrapper>
          <ItemButtonWrapper>
            <RoundButton2
              text={getString('VIEW_MORE')}
              onClick={(): void => moveUrl('https://github.com/dooboolab/hackatalk')}
            />
          </ItemButtonWrapper>
        </WorkItemWrapper>

      </WorkItemListWrapper>

    </WorkContainer>
  );
}

export default Work;
