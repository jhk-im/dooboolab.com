import { BODY2, H2, H3 } from '../../utils/texts';
import {
  IC_GRAPHQLSEOUL,
  IC_REACTNATIVESEOUL,
} from '../../utils/icons';
import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import StoryTextButton from '../shared/StoryTextButton';
import ViewMoreRoundButton from '../shared/ViewMoreRoundButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoryContainer = styled.div`
  width: 100vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    min-height: 400px;
  }
  
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
  justify-content: center;
  align-content: center;
`;

const DescriptionWrapper = styled.div`
  width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 500px;
    margin-bottom: 20px;
    line-height: 25px;
  }

  @media (max-width: 800px) {
    width: 400px;
    margin-bottom: 15px;
    line-height: 20px;
  }

  @media (max-width: 600px) {
    width: 300px;
    margin-bottom: 10px;
    line-height: 15px;
  }
`;

const ViewMoreButtonWrapper = styled.div`
  width: 100vw;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const CommunityContainer = styled.div`
  width: 100vw;
  padding: 30px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (prefers-color-scheme: dark) {
      background: ${darkColor.SUB_BACKGROUND};
  }

  @media (prefers-color-scheme: light){
      background: ${lightColor.SUB_BACKGROUND};
  }
`;

const CommunityImageListWrapper = styled.div`
  padding: 10px;
  margin-bottom: 50px;
  width: 80vw;
  height: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-evenly;

  @media (max-width: 1000px) {
    margin-bottom: 40px;
  }

  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 600px) {
    margin-bottom: 0px;
  }
`;

const GraphQlImageWrapper = styled.div`
  padding: 10px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${IC_GRAPHQLSEOUL});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ReactNativeImageWrapper = styled.div`
  padding: 10px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${IC_REACTNATIVESEOUL});
  background-repeat: no-repeat;
  background-size: cover;  
`;

const ItemButtonWrapper = styled.div`
  width: 100vw;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (max-width: 1000px) {
    padding: 20px;
  }

  @media (max-width: 800px) {
    padding: 0px;
  }
`;

function Intro(): ReactElement {
  const history = useHistory();
  const tabChange = (inputPath): void => {
    const location: Record<string, any> = {
      pathname: inputPath,
      state: {},
    };
    history.push(location);
  };
  const moveUrl = (inputPath): void => {
    window.open(inputPath);
  };
  return (
    <Container>
      <StoryContainer>
        <TitleWrapper>
          <H2>{ getString('STORY') }</H2>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('STORY_DESCRIPTION') }</BODY2>
        </DescriptionWrapper>
        <TitleWrapper>
          <H3>{ getString('VISION_MISSION') }</H3>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('VISION_DESCRIPTION') }</BODY2>
          <ViewMoreButtonWrapper>
            <StoryTextButton
              onClick={(): void => tabChange('/vision')}
              text={getString('VIEW_MORE2')}/>
          </ViewMoreButtonWrapper>
        </DescriptionWrapper>
      </StoryContainer>
      <CommunityContainer>
        <TitleWrapper>
          <H3>{ getString('COMMUNITY') }</H3>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('COMMUNITY_DESCRIPTION') }</BODY2>
        </DescriptionWrapper>
        <CommunityImageListWrapper>
          <ReactNativeImageWrapper>
            <ItemButtonWrapper>
              <ViewMoreRoundButton
                text={ getString('VIEW_MORE') }
                onClick={ (): void => moveUrl('https://reactnativeseoul.org/') }/>
            </ItemButtonWrapper>
          </ReactNativeImageWrapper>
          <GraphQlImageWrapper>
            <ItemButtonWrapper>
              <ViewMoreRoundButton
                text={ getString('VIEW_MORE') }
                onClick={ (): void => moveUrl('https://medium.com/graphql-seoul') }/>
            </ItemButtonWrapper>
          </GraphQlImageWrapper>
        </CommunityImageListWrapper>
      </CommunityContainer>
    </Container>
  );
}

export default Intro;
