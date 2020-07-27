import React, { ReactElement } from 'react';
import { device, icon } from '../../theme';

import ViewMoreRoundButton from './ViewMoreRoundButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

interface Props {
  id?: string;
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  margin: 0 40px 10px 40px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  line-height: 150%;

  @media ${device.laptop} {
    margin-bottom: 15px;
  }  

  @media ${device.laptopL} {
    margin-bottom: 20px;
  }  
`;

const WorkItemListWrapper = styled.div`
  width: 90vw;
  padding: 30px;
  max-width: 1300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }  
`;

const WorkItemWrapper = styled.div`
  padding: 10px;
  width: 80vw;
  margin: 0 20px 20px 20px;
  border-width: 2px;
  border-color: ${({ theme }): string => theme.itemBorder};
  border-color: ${({ theme }): string => theme.itemBorderTransparent};
  border-radius: 10px;
  border-style: solid;
  background: ${({ theme }): string => theme.itemBackground};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    width: 400px;
    height: 400px;
  }  
`;

const WorkImageWrapper = styled.div`
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
  width: 90%;
  height: auto;
  padding: 10px 40px;
  margin: 16px 0px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const H2 = styled.text`
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

const ItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const NextPageMenubar = styled.div`
  width: 100vw;
  position: relative;
  bottom: 100px;

  @media ${device.tablet} {
    bottom: 70px;
  }  
`;

function Work(props: Props): ReactElement {
  const { id } = props;

  const workItemURLs = [
    '',
    'https://github.com/dooboolab/dooboo-ui',
    'https://github.com/dooboolab/hackatalk',
  ];

  const workDescriptions = [
    ['Comming Soon!', '', ''],
    [getString('DOOBOOUI_DESCRIPTION_1'), getString('DOOBOOUI_DESCRIPTION_2'), getString('DOOBOOUI_DESCRIPTION_3')],
    [getString('HACKATALK_DESCRIPTION_1'), getString('HACKATALK_DESCRIPTION_2'), getString('HACKATALK_DESCRIPTION_3')],
  ];

  const moveUrl = (inputPath: string): void => {
    window.open(inputPath);
  };

  const works = icon.works;

  return (
    <Container>
      <WorkContainer>
        <TitleWrapper>
          <H2>{ getString('WORK') }</H2>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('WORK_DESCRIPTION_1') }</BODY2>
          <BODY2>{ getString('WORK_DESCRIPTION_2') }</BODY2>
          <BODY2>{ getString('WORK_DESCRIPTION_3') }</BODY2>
        </DescriptionWrapper>
        <WorkItemListWrapper>{
          works.map((work, i) => {
            return <WorkItemWrapper key={i}>
              <WorkImageWrapper>
                <WorkImage src={ work }/>
              </WorkImageWrapper>
              <WorkTextWrapper>
                <DescriptionText>{ workDescriptions[works.indexOf(work)][0] }</DescriptionText>
                <DescriptionText>{ workDescriptions[works.indexOf(work)][1] }</DescriptionText>
                <DescriptionText>{ workDescriptions[works.indexOf(work)][2] }</DescriptionText>
              </WorkTextWrapper>
              <ItemButtonWrapper>
                {
                  workItemURLs[works.indexOf(work)] === ''
                    ? null
                    : <ViewMoreRoundButton
                      text={ getString('VIEW_MORE') }
                      onClick={ (): void => moveUrl(workItemURLs[works.indexOf(work)]) }
                    />
                }
              </ItemButtonWrapper>
            </WorkItemWrapper>;
          })
        }</WorkItemListWrapper>
      </WorkContainer>
      <NextPageMenubar id={ id }/>
    </Container>
  );
}

export default Work;
