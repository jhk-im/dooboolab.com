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
} from '../../utils/Profiles';
import { DescriptionText, Heading1, SubTitleText } from '../../utils/Texts';
import React, { ReactElement } from 'react';

import styled from 'styled-components';

// People
const PeopleContainer = styled.div`
  padding: 100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #D2E2DF;
  @media (prefers-color-scheme: dark) {
    background: #2C2C2C;
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

const PeopleTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const PeopleDescriptionWrapper = styled.div`
  padding: 20px;
  width: 550px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const ProfilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5;
  width: 1000px;
  margin-bottom: 50px;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1000px) {
    width: 700px;
  }

  @media (max-width: 800px) {
    width: 460px;
  }

`;

const ProfileItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10;
  margin:10;
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
    color: #D3D8E8;
  }
`;

function People(): ReactElement {
  return (

    <PeopleContainer>
      <TitleWrapper>
        <Heading1>People</Heading1>
      </TitleWrapper>
      <PeopleTitleWrapper>
        <SubTitleText>Work together</SubTitleText><br></br>
        <SubTitleText>Grow together</SubTitleText>
      </PeopleTitleWrapper>
      <PeopleDescriptionWrapper>
        <DescriptionText>
          We are a group of experts in IT technology development.<br></br>
          We are constantly developing services based on philosophy
          and ideas by finding the inconveniences facing people in daily life.
        </DescriptionText>
      </PeopleDescriptionWrapper>
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
