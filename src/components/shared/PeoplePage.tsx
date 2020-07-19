import { BODY2, H2, H4 } from '../../utils/texts';
import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { getString } from '../../../STRINGS';
import { profiles } from '../../utils/profiles';
import styled from 'styled-components';

const PeopleContainer = styled.div`
  padding: 50px;
  width: 100vw;

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

const TitleWrapper = styled.div`
  padding: 50px;

  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media (max-width: 1000px) {
    padding: 30px;
  }

  @media (max-width: 800px) {
    padding: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DescriptionWrapper = styled.div`
  padding: 20px;
  width: 800px;
  line-height: 30px;

  @media (max-width: 1000px) {
    width: 700px;
    line-height: 25px;
  }

  @media (max-width: 800px) {
    width: 600px;
    margin-bottom: 10px;
    line-height: 20px;
  }

  @media (max-width: 600px) {
    width: 400px;
    line-height: 15px;
  }
`;

const ProfilesWrapper = styled.div`
  width: 1000px;
  padding: 5;
  margin-bottom: 50px;

  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1000px) {
    width: 700px;
  }

  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const ProfileItemWrapper = styled.div`
  padding: 10;
  margin:10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const TempBox = styled.div`
  width: 186px;
`;

const ProfileImage = styled.img`
  width: 186px;
  height: 186px;
  margin-bottom: 5;
`;

const ProfileInfo = styled.text`
  font-size: 15;
  text-align: left;
  font-family: avenir;
  
  @media (prefers-color-scheme: dark) {
    color: ${darkColor.ON_BACKGROUND_TEXT};
  }

  @media (prefers-color-scheme: light){
    color: ${lightColor.ON_BACKGROUND_TEXT};
  }
`;

function PeoplePage(): ReactElement {
  const profileWrappers = [];

  for (const [key, value] of profiles) {
    profileWrappers.push(
      <ProfileItemWrapper>
        <ProfileImage src={ key }></ProfileImage>
        <ProfileInfo>{ value }</ProfileInfo>
      </ProfileItemWrapper>,
    );
  }

  return (
    <PeopleContainer>
      <TitleWrapper>
        <H2>{ getString('PEOPLE')}</H2>
      </TitleWrapper>
      <SubTitleWrapper>
        <H4>{ getString('PEOPLE_SUBTITLE_01') }</H4>
        <H4>{ getString('PEOPLE_SUBTITLE_02') }</H4>
      </SubTitleWrapper>
      <DescriptionWrapper>
        <BODY2>{ getString('PEOPLE_DESCRIPTION') }</BODY2>
      </DescriptionWrapper>
      <ProfilesWrapper>{ profileWrappers }<ProfileItemWrapper>
        <TempBox/>
      </ProfileItemWrapper>
      </ProfilesWrapper>
    </PeopleContainer>
  );
}

export default PeoplePage;
