import React, { ReactElement } from 'react';

import { INTRO_BACKGROUND } from '../../utils/images';
import IntroRoundButton from '../shared/IntroRoundButton';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Props {
  id?: string;
}

const IntroContainer = styled.div`
  width: 100vw;
  height: 42vw;
  background-image: url(${INTRO_BACKGROUND});
  background-repeat: no-repeat;
  background-size: 100% ;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: left;
`;

const TextWrapper = styled.div`
  flex: 2;  
  width: 100vw;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media ${device.mobileM} {
    flex: 1.8;
  }

  @media ${device.mobileL} {
    flex: 1.7;
  }

  @media ${device.tablet} {
    flex: 1.6;
    align-items: flex-start;
  }
  
  @media ${device.laptop} {
    flex: 1.5;
    align-items: flex-start;
  }
`;

const TitleWrapper = styled.div`
  max-width: 200px;
  padding: 5px;
  line-height: 15px;
  margin-left: 0px;
  text-align:center;
  
  @media ${device.mobileM} {
    max-width: 300px;
    line-height: 20px;
  }

  @media ${device.mobileL} {
    max-width: 400px;
    line-height: 30px;
  }

  @media ${device.tablet} {
    max-width: 500px;
    margin-left: 80px;
    line-height: 50px;
    text-align: left;
  }
  @media ${device.laptop} {
    max-width: 600px;
    margin-left: 100px;
    line-height: 60px;
    text-align:left;
  }
`;

const DescriptionWrapper = styled.div`
  width: 100vw;
  max-width: 200px;
  padding: 5px;
  margin-left: 0px;
  line-height: 10px;

  @media ${device.mobileM} {
    max-width: 300px;
    line-height: 10px;
  }

  @media ${device.mobileL} {
    max-width: 450px;
    line-height: 20px;
  }

  @media ${device.tablet} {
    max-width: 600px;
    margin-left: 80px;
    line-height: 25px;
    text-align: left;
  }
  @media ${device.laptop} {
    max-width: 700px;
    margin-left: 100px;
    line-height: 30px;
    text-align: left;
  }
`;

const ContactButtonWrapper = styled.div`
  flex: 1;
  width: 100vw;
  background: linear-gradient(to right,rgba(0,0,0,0.7), rgba(0,0,0,0));
  
  display: flex;
  justify-content: center;
  align-items: top;

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  margin-left: 0px;
  margin-top: 0px;

  @media ${device.mobileM} {
    margin-top: 20px;
    margin-top: 5px;
  }

  @media ${device.mobileL} {
    margin-top: 30px;
    margin-top: 10px;
  }
  
  @media ${device.tablet} {
    margin-left: 80px;
    margin-top: 20px;
  }
  
  @media ${device.laptop} {
    margin-left: 100px;
    margin-top: 20px;
  }
`;

export const H1 = styled('text')`
  font-size: 15px;
  font-family: futura;
  font-weight: 300;
  color: ${({ theme }): string => theme.btnPrimaryLight};

  @media ${device.mobileM} {
    font-size: 20px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 40px;
  }

  @media ${device.laptop} {
    font-size: 50px;
  }
`;

export const BODY1 = styled('text')`
  font-size: 8px;
  font-family: avenir;
  font-weight: lighter;
  color: ${({ theme }): string => theme.btnPrimaryLight};

  @media ${device.mobileM} {
    font-size: 10px;
  }

  @media ${device.mobileL} {
    font-size: 15px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptop} {
    font-size: 25px;
  }
`;

function IntroPage(props: Props): ReactElement {
  const history = useHistory();
  const { id } = props;

  const tabChange = (inputPath, pageNumber): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: { },
    };
    history.push(location);
    localStorage.setItem('currentPage', pageNumber);
  };

  return (
    <IntroContainer id={ id }>
      <TextWrapper>
        <TitleWrapper>
          <H1>{ getString('INTRO_TITLE') }</H1>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY1>
            { getString('INTRO_DESCRIPTION') }
          </BODY1>
        </DescriptionWrapper>
      </TextWrapper>
      <ContactButtonWrapper>
        <ButtonWrapper>
          <IntroRoundButton
            onClick = { (): void => tabChange('/', 3) }
            text={ getString('CONTACT_US') }
            href="#contact"/>
        </ButtonWrapper>
      </ContactButtonWrapper>
    </IntroContainer>
  );
}

export default IntroPage;
