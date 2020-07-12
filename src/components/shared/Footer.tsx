import React, { ReactElement } from 'react';

import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 180px;
  background: #40444F;
  @media (max-width: 1000px) {
    height: 160px;
  }
  @media (max-width: 800px) {
    height: 130px;
  }
  @media (max-width: 600px) {
    height: 100px;
  }
  @media (prefers-color-scheme: dark) {
    background: #232323;
  }
`;

const FooterTextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
text-align:left;
`;

const FooterText1 = styled.div`
padding:10px;
font-size: 18px;
font-family: futura;
color: #BEC8E2;
@media (max-width: 1000px) {
  font-size: 12px;
}
@media (max-width: 800px) {
  font-size: 10px;
}
`;

const FooterText2 = styled.div`
padding: 10px;
font-size: 20px;
font-family: avenir;
color: #ffffff;
@media (max-width: 1000px) {
  font-size: 15px;
}
@media (max-width: 800px) {
  font-size: 12px;
}
@media (max-width: 600px) {
  font-size: 10px;
}
`;

function Footer(): ReactElement {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterText1>Address</FooterText1>
        <FooterText2>서울시 강남구 선릉로 94번길 40 203호</FooterText2>
      </FooterTextWrapper>
      <FooterTextWrapper>
        <FooterText2>© 2017-2020 dooboolab, All Rights Reserved</FooterText2>
      </FooterTextWrapper>
    </FooterWrapper>
  );
}

export default Footer;
