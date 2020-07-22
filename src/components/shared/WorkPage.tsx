import { Icon, device } from '../../theme';
import React, { ReactElement } from 'react';

import ViewMoreRoundButton from './ViewMoreRoundButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useThemeContext } from '../../providers/ThemeProvider';

const WorkContainer = styled.div`
  padding: 50px;
  width: 100vw;
  background: ${({ theme }): string => theme.background};
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.laptop} {
    height: 80vh;
  }
  
  @media ${device.laptopL} {
    height: 80vh;
    min-height: 700px;
  }
`;

const TitleWrapper = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media ${device.laptop} {
    padding: 20px;
  }  

  @media ${device.laptop} {
    padding: 30px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media ${device.laptop} {
    margin-bottom: 15px;
  }  

  @media ${device.laptopL} {
    margin-bottom: 20px;
  }  
`;

const WorkItemListWrapper = styled.div`
  width: 80%;
  padding: 30px;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }  
`;

const WorkItemWrapper = styled.div`
  padding: 10px;
  height: 200px;
  width: 65vw;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: ${({ theme }): string => theme.itemBorder};
  border-color: ${({ theme }): string => theme.itemBorderTransparent};
  border-radius: 10px;
  border-style: solid;
  background: ${({ theme }): string => theme.itemBackground};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    width: 250px;
    height: 300px;
  }  

  @media ${device.laptopL} {
    width: 300px;
    height: 350px;
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
  flex: 1;
  width: 80%;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex: 2;
  }
  
  @media ${device.laptop} {
    flex: 3;
  }
`;

const DescriptionText = styled.text`
  font-size: 12px;
  line-height: 15px;
  font-family: avenir;
  color: ${({ theme }): string => theme.btnPrimaryLightFont};

  @media ${device.tablet} {
    font-size: 15px;
    line-height: 20px;
  }
  
  @media ${device.laptop} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const H2 = styled('text')`
  font-size: 25px;
  font-weight: bold;
  font-family: futura;
  color: ${({ theme }): string => theme.btnPrimaryLightFont};

  @media ${device.tablet} {
    font-size: 30px;
  }
  
  @media ${device.laptop} {
    font-size: 35px;
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
  const workIcons = [];

  const moveUrl = (inputPath): void => {
    window.open(inputPath);
  };

  for (const value of Icon.works) {
    workIcons.push(
      <WorkItemWrapper >
        <WorkImageWrapper>
          <WorkImage src={ value }/>
        </WorkImageWrapper>
        <WorkTextWrapper>
          <DescriptionText>{ workDescriptions[Icon.works.indexOf(value)] }</DescriptionText>
        </WorkTextWrapper>
        <ItemButtonWrapper>
          {
            workItemURLs[Icon.works.indexOf(value)] === ''
              ? null
              : <ViewMoreRoundButton
                text={ getString('VIEW_MORE') }
                onClick={ (): void => moveUrl(workItemURLs[Icon.works.indexOf(value)]) }/>
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
      <WorkItemListWrapper>{ workIcons }</WorkItemListWrapper>
    </WorkContainer>
  );
}

export default Work;
