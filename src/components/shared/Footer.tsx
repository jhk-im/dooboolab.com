import React, { ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

import FooterButton from '../shared/FooterButton';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const thisYear = new Date().getFullYear();

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  
  @media (max-width: 800px) {
    height: 70px;
  }

  @media (prefers-color-scheme: dark) {
    background: ${darkColor.FOOTER_BACKGROUND};
  }

  @media (prefers-color-scheme: light){
    background: ${lightColor.FOOTER_BACKGROUND};
  }
`;

const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: space-between;
  width: 400px;
  padding: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 5px;
  }
`;

const FooterTitleText = styled.div`
  padding:10px;
  font-size: 20px;
  font-family: futura;
  color: ${lightColor.ON_FOOTER_TEXT};

  @media (max-width: 1000px) {
    font-size: 18px;
  }
  
  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
  
  @media (prefers-color-scheme: light) {
    color: ${lightColor.ON_FOOTER_TEXT};
  }

  @media (prefers-color-scheme: dark) {
    color: ${darkColor.ON_FOOTER_TEXT};
  }
`;

const FooterDescriptionText = styled.div`
  padding: 10px;
  font-size: 15px;
  font-family: avenir;
  color: ${lightColor.ON_FOOTER_SUB_TEXT};

  @media (max-width: 1000px) {
    font-size: 10px;
  }

  @media (max-width: 800px) {
    font-size: 5px;
  }
`;

function Footer(): ReactElement {
  const history = useHistory();

  const tabChange = (inputPath): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: {},
    };
    history.push(location);
  };

  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterTitleText>{ getString('ADDRESS_TITLE') }</FooterTitleText>
        <FooterDescriptionText>
          { getString('ADDRESS') }
        </FooterDescriptionText>
      </FooterTextWrapper>
      <FooterTextWrapper>
        <ButtonWrapper>
          <FooterButton
            text={ getString('OUR_VISSION_MISSION') }
            onClick={(): void => tabChange('/vision')}/>
          <FooterButton
            text={ getString('CODE_OF_CONDUCT') }
            onClick={(): void => tabChange('/codeofconduct')}/>
        </ButtonWrapper>
        <FooterDescriptionText>
          © 2017-{thisYear} dooboolab, All Rights Reserved
        </FooterDescriptionText>
      </FooterTextWrapper>
    </FooterWrapper>
  );
}

export default Footer;
