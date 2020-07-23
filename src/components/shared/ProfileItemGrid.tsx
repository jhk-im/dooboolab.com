import { MemberImages, Members } from '../../utils/Profiles';
import React, { ReactElement } from 'react';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../theme';
import styled from 'styled-components';

const ProfilesWrapper = styled.div`
  width: 100vw;
  margin-bottom: 50px;

  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.tablet} {
    width: 700px;
  }

  @media ${device.laptop} {
    width: 1000px;
  }
`;

const ProfileItemWrapper = styled.div`
  padding: 10;
  margin: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const EmptyBox = styled.div`
  width: 186px;
`;

const ProfileImage = styled.img`
  width: 186px;
  height: 186px;
  border-radius: 100px;
  border-style: solid;
  border-color: #fff;
  border-color: rgba( 255, 255, 255, 0);
  border-width: 1px;
  margin-bottom: 5;
`;

const ProfileIconWrapper = styled.div`
  width: 165px;
  padding: 5px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;

const ProfileIconImageWrapper = styled.div`
  width: 100px;
  height: 30px;

  color: ${({ theme }): string => theme.btnPrimaryLightFont};
  
  cursor: pointer;

  &:hover{
    color: ${({ theme }): string => theme.iconHover};
  }
`;

const ProfileInfo = styled.text`
  font-size: 15px;
  padding: 5px;
  text-align: center;
  font-family: avenir;
  color: ${({ theme }): string => theme.btnPrimaryLightFont};
`;

function ProfileItemGrid(): ReactElement {
  const moveUrl = (inputPath): void => {
    window.open(inputPath);
  };
  const profileItems = [];

  for (let i = 0; i < MemberImages.length; i++) {
    profileItems.push(
      <ProfileItemWrapper>
        <ProfileImage src={ MemberImages[i] }></ProfileImage>
        <ProfileInfo>{Members[i].name} / {Members[i].position}</ProfileInfo>
        <ProfileIconWrapper>
          <ProfileIconImageWrapper>
            {
              Members[i].sns.github === ''
                ? <FontAwesomeIcon icon={ faGithub } size="lg" color="gray"/>
                : <FontAwesomeIcon
                  icon={ faGithub }
                  size="lg"
                  onClick= { () : void => moveUrl(Members[i].sns.github) }/>
            }
          </ProfileIconImageWrapper>
          <ProfileIconImageWrapper>
            {
              Members[i].sns.linkedin === ''
                ? <FontAwesomeIcon icon={ faLinkedin } size="lg" color="gray"/>
                : <FontAwesomeIcon
                  icon={ faLinkedin }
                  size="lg"
                  onClick= { () : void => moveUrl(Members[i].sns.linkedin) }/>
            }
          </ProfileIconImageWrapper>
          <ProfileIconImageWrapper>
            {
              Members[i].sns.twitter === ''
                ? <FontAwesomeIcon icon={ faTwitter } size="lg" color="gray"/>
                : <FontAwesomeIcon
                  icon={ faTwitter }
                  size="lg"
                  onClick= { () : void => moveUrl(Members[i].sns.twitter) }/>
            }
          </ProfileIconImageWrapper>
        </ProfileIconWrapper>
      </ProfileItemWrapper>,
    );
  }

  return (
    <ProfilesWrapper>
      { profileItems }
      <ProfileItemWrapper>
        <EmptyBox/>
        <EmptyBox/>
        <EmptyBox/>
        <EmptyBox/>
      </ProfileItemWrapper>
    </ProfilesWrapper>
  );
}

export default ProfileItemGrid;
