import React, { ReactElement } from 'react';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../theme';
import { members } from '../../utils/Profiles';
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
  width: 156px;
  height: 156px;
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
  width: 40px;
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
  const moveUrl = (inputPath: string): void => {
    window.open(inputPath);
  };

  return (
    <ProfilesWrapper>
      {
        members.map((member, i) => {
          return <ProfileItemWrapper key={i}>
            <ProfileImage src={ member.image }></ProfileImage>
            <ProfileInfo>{member.name} / {member.position}</ProfileInfo>
            <ProfileIconWrapper>
              <ProfileIconImageWrapper>
                {
                  member.sns.github === ''
                    ? <FontAwesomeIcon icon={ faGithub } size="lg" color="gray"/>
                    : <FontAwesomeIcon
                      icon={ faGithub }
                      size="lg"
                      onClick= { () : void => moveUrl(member.sns.github) }/>
                }
              </ProfileIconImageWrapper>
              <ProfileIconImageWrapper>
                {
                  member.sns.linkedin === ''
                    ? <FontAwesomeIcon icon={ faLinkedin } size="lg" color="gray"/>
                    : <FontAwesomeIcon
                      icon={ faLinkedin }
                      size="lg"
                      onClick= { () : void => moveUrl(member.sns.linkedin) }/>
                }
              </ProfileIconImageWrapper>
              <ProfileIconImageWrapper>
                {
                  member.sns.twitter === ''
                    ? <FontAwesomeIcon icon={ faTwitter } size="lg" color="gray"/>
                    : <FontAwesomeIcon
                      icon={ faTwitter }
                      size="lg"
                      onClick= { () : void => moveUrl(member.sns.twitter) }/>
                }
              </ProfileIconImageWrapper>
            </ProfileIconWrapper>
          </ProfileItemWrapper>;
        })
      }
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
