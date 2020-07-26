import React, { ReactElement } from 'react';

import FooterButton from '../shared/FooterButton';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const thisYear = new Date().getFullYear();

const FooterWrapper = styled.div`
  width: 100vw;
  height: 80px;
  background: ${({ theme }): string => theme.footerBackground};

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  @media ${device.tablet} {
    height: 120px;
  }
`;

const FooterTextWrapper = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 400px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: space-between;

  @media ${device.laptop} {
    flex-direction: row;
    padding: 10px;
  }

`;

const FooterTitleText = styled.div`
  padding:10px;
  font-size: 10px;
  font-family: futura;
  color: #BEC8E2;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const FooterDescriptionText = styled.div`
  padding: 10px;
  font-size: 5px;
  font-family: avenir;
  color: #FFFFFF;

  @media ${device.tablet} {
    font-size: 14px;
    padding: 10px;
  }

  @media ${device.laptop} {
    font-size: 15px;
    padding: 15px;
  }
`;

function Footer(): ReactElement {
  const history = useHistory();
  const titles = [getString('OUR_VISSION_MISSION'), getString('CODE_OF_CONDUCT')];
  const hrefs = ['/vision', '/codeofconduct'];

  const tabChange = (inputPath, pageNumber): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: {},
    };
    history.push(location);
    localStorage.setItem('currentPage', pageNumber);
  };

  const currentPage = localStorage.getItem('currentPage');

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
          {
            titles.map((title, i) => {
              return <FooterButton
                key={i}
                href = { hrefs[i] }
                text={ titles[i] }
                onClick={(): void => tabChange(hrefs[i], i + 6)}
                isSelected={ Number(currentPage) === i + 6 && true }
              />;
            })
          }
        </ButtonWrapper>
        <FooterDescriptionText>
          © 2017-{thisYear} dooboolab, All Rights Reserved
        </FooterDescriptionText>
      </FooterTextWrapper>
    </FooterWrapper>
  );
}

export default Footer;
