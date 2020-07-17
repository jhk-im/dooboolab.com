import { BODY2, H2, H4 } from '../../utils/texts';
import {
  CLARK_PROFILE,
  DANIEL_PROFILE,
  DEAN_PROFILE,
  ETHAN_PROFILE,
  HUN_PROFILE,
  HYO_PROFILE,
  JENNY_PROFILE,
  JERRY_PROFILE,
  JESSIE_PROFILE,
  JOY_PROFILE,
  RIM_PROFILE,
  SARAH_PROFILE,
  SONG_PROFILE,
  TERRY_PROFILE,
  YOON_PROFILE,
} from '../../utils/profiles';
import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import { getString } from '../../../STRINGS';
import styled from 'styled-components';

const PeopleContainer = styled.div`
  padding: 30px;
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

const SubTitleWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
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
  alt: '';
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

function People(): ReactElement {
  return (
    <PeopleContainer>
      <TitleWrapper>
        <H2>{ getString('PEOPLE')}</H2>
      </TitleWrapper>
      <SubTitleWrapper>
        <H4>{ getString('PEOPLE_SUBTITLE') }</H4>
      </SubTitleWrapper>
      <DescriptionWrapper>
        <BODY2>
          { getString('PEOPLE_DESCRIPTION') }
        </BODY2>
      </DescriptionWrapper>
      <ProfilesWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={HYO_PROFILE}></ProfileImage>
          <ProfileInfo>Hyo / CEO</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={SONG_PROFILE}></ProfileImage>
          <ProfileInfo>Song / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={ETHAN_PROFILE}></ProfileImage>
          <ProfileInfo>Ethan / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={DEAN_PROFILE}></ProfileImage>
          <ProfileInfo>Dean / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={HUN_PROFILE}></ProfileImage>
          <ProfileInfo>Hun / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={CLARK_PROFILE}></ProfileImage>
          <ProfileInfo>Clark / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={JERRY_PROFILE}></ProfileImage>
          <ProfileInfo>Jerry / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={DANIEL_PROFILE}></ProfileImage>
          <ProfileInfo>Daniel / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={TERRY_PROFILE}></ProfileImage>
          <ProfileInfo>Terry / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={JESSIE_PROFILE}></ProfileImage>
          <ProfileInfo>Jessie / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={JENNY_PROFILE}></ProfileImage>
          <ProfileInfo>Jenny / Developer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={JOY_PROFILE}></ProfileImage>
          <ProfileInfo>Joy / Business</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={SARAH_PROFILE}></ProfileImage>
          <ProfileInfo>Sarah / Designer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={YOON_PROFILE}></ProfileImage>
          <ProfileInfo>Yoon / Designer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <ProfileImage src={RIM_PROFILE}></ProfileImage>
          <ProfileInfo>Rim / Desginer</ProfileInfo>
        </ProfileItemWrapper>
        <ProfileItemWrapper>
          <TempBox/>
        </ProfileItemWrapper>
      </ProfilesWrapper>
    </PeopleContainer>
  );
}

export default People;
