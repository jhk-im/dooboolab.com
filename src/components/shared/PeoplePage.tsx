import React, { ReactElement } from 'react';

import ProfileItemGrid from '../shared/ProfileItemGrid';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';

interface Props {
  id?: string;
}

const PeopleContainer = styled.div`
  padding: 50px;
  width: 100vw;
  background: ${({ theme }): string => theme.subBackground};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media ${device.tablet} {
    padding: 20px;
  }

  @media ${device.laptop} {
    padding: 30px;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  line-height: 30px;
  
  @media ${device.tablet} {
    line-height: 40px;
  }

  @media ${device.laptop} {
    line-height: 50px;
  }
`;

const DescriptionWrapper = styled.div`
  width: 300px;
  padding: 20px;
  line-height: 20px;

  @media ${device.mobileL} {
    width: 380px;
    margin-bottom: 10px;
    line-height: 25px;
  }

  @media ${device.tablet} {
    width: 600px;
    line-height: 30px;
  }

  @media ${device.laptop} {
    width: 700px;
    line-height: 35px;
  }
`;

export const H2 = styled.text`
  font-size: 30px;
  font-weight: bold;
  font-family: futura;
  color: ${({ theme }): string => theme.btnPrimaryLightFont};

  @media ${device.tablet} {
    font-size: 35px;
  }
  
  @media ${device.laptop} {
    font-size: 40px;
  }
`;

export const H4 = styled.text`
  font-size: 20px;
  font-family: avenir;
  color: ${({ theme }): string => theme.colorAccentLight};

  @media ${device.tablet} {
    font-size: 25px;
  }
  
  @media ${device.laptop} {
    font-size: 30px;
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

function PeoplePage(props: Props): ReactElement {
  const { id } = props;

  return (
    <PeopleContainer id={ id }>
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
      <ProfileItemGrid/>
    </PeopleContainer>
  );
}

export default PeoplePage;
