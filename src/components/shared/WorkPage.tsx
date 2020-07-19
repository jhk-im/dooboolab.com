import { BODY2, H2 } from '../../utils/texts';
import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { IC_WORKS } from '../../utils/icons';
import ViewMoreRoundButton from './ViewMoreRoundButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

const WorkContainer = styled.div`
  padding: 30px;
  width: 100vw;
  height: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (prefers-color-scheme: dark) {
      background: ${darkColor.BACKGROUND};
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.BACKGROUND};
  }
`;

const TitleWrapper = styled.div`
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
  padding: 10px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin-bottom: 15px;
  }

  @media (max-width: 800px) {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const WorkItemListWrapper = styled.div`
  width: 90%;
  padding: 30px;

  display: flex;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const WorkItemWrapper = styled.div`
  padding: 10px;
  width: 350px;
  height: 500px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: #EDEDED;
  border-radius: 10px;
  border-style: solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1300px) {
    width: 300px;
    height: 450px;
  }


  @media (max-width: 1200px) {
    width: 250px;
    height: 400px;
  }

  @media (max-width: 1000px) {
    width: 70vw;
    height: 180px;
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${darkColor.SUB_BACKGROUND};
    border-color: #ffffff;
    border-color: rgba(255, 255, 255, 0);
  }

  @media (prefers-color-scheme: light){
    color: ${lightColor.SUB_BACKGROUND};
  }

  @media (prefers-color-scheme: dark) {
    background: #2C2C2C;

  }
`;

const WorkImageWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const WorkImage = styled.img`
  max-width: 130px;
  max-height: 40px;
  width: auto;
  height: auto;
`;

const WorkTextWrapper = styled.div`
  flex: 3;
  width: 200px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex: 1.5;
    width: 60vw;
  }

  @media (max-width: 800px) {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex: 0.5;
  }
`;

const DescriptionText = styled.text`
  font-size: 20px;
  line-height: 25px;
  font-family: avenir;

  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: 800px) {
    font-size: 15px;
    line-height: 15px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 10px;
  }

  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_BACKGROUND_TEXT};
  }
`;

const ItemButtonWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const workItemURLs = [
  '',
  'https://github.com/dooboolab/dooboo-ui',
  'https://github.com/dooboolab/hackatalk',
];

const workDescriptions = [
  'Comming Soon!',
  getString('DOOBOOUI_DESCRIPTION'),
  getString('HACKATALK_DESCRIPTION'),
];

function Work(): ReactElement {
  const moveUrl = (inputPath): void => {
    window.open(inputPath);
  };

  const workItemWrappers = [];

  for (const value of IC_WORKS) {
    workItemWrappers.push(
      <WorkItemWrapper>
        <WorkImageWrapper>
          <WorkImage src={ value }/>
        </WorkImageWrapper>
        <WorkTextWrapper>
          <DescriptionText>{ workDescriptions[IC_WORKS.indexOf(value)] }</DescriptionText>
        </WorkTextWrapper>
        <ItemButtonWrapper>
          {
            workItemURLs[IC_WORKS.indexOf(value)] === ''
              ? null
              : <ViewMoreRoundButton
                text={ getString('VIEW_MORE') }
                onClick={ (): void => moveUrl(workItemURLs[IC_WORKS.indexOf(value)]) }/>
          }
        </ItemButtonWrapper>
      </WorkItemWrapper>,
    );
  }

  return (
    <WorkContainer>
      <TitleWrapper>
        <H2>{ getString('WORK') }</H2>
      </TitleWrapper>
      <DescriptionWrapper>
        <BODY2>{ getString('WORK_DESCRIPTION') }</BODY2>
      </DescriptionWrapper>
      <WorkItemListWrapper>{ workItemWrappers }</WorkItemListWrapper>
    </WorkContainer>
  );
}

export default Work;
