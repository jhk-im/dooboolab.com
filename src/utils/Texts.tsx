import { darkColor, lightColor } from '../utils/Colors';

import styled from 'styled-components';

export const H1 = styled('text')`
  font-size: 50px;
  font-family: futura;
  font-weight: 300;
  @media (max-width: 880px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 35px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
  // dark mode
  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_BUTTON};
  }
  // light mode
  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_BUTTON};
  }
`;

export const BODY1 = styled('text')`
  font-size: 24px;
  font-family: avenir;
  font-weight: lighter;
  @media (max-width: 880px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  // dark mode
  @media (prefers-color-scheme: dark) {
      color: ${darkColor.ON_BUTTON};
  }
  // light mode
  @media (prefers-color-scheme: light){
      color: ${lightColor.ON_BUTTON};
  }
`;

export const TITLE = styled('text')`
  font-size: 40px;
  font-family: futura;
  font-weight: bold;
`;

export const SUBTITLE = styled('text')`
  font-size: 36px;
  font-family: avenir;
  font-weight: bolder;
`;

export const BUTTON = styled('text')`
  font-size: 32px;
  font-family: futura;
  font-weight: 300;

`;

export const H2 = styled('text')`
  font-size: 24px;
  font-family: avenir;
  font-weight: 400;
`;

export const BODY = styled('text')`
  font-size: 24px;
  font-family: avenir;
  font-weight: lighter;
`;

export const SUB_BODY = styled('text')`
  font-size: 18px;
  font-family: avenir;
  font-weight: lighter;
`;

export const FOOTER = styled('text')`
  font-size: 18px;
  font-family: futura;
  font-weight: 300;
`;

export const SUB_FOOTER = styled('text')`
  font-size: 20px;
  font-family: avenir;
  font-weight: lighter;
`;

export const NAME = styled('text')`
  font-size: 16px;
  font-family: avenir;
  font-weight: border;
`;

///
export const TitleTextWhite1 = styled('text')`
  font-size: 50px;
  font-family: futura;
  color: white;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const color = styled.col``;

export const TitleText1 = styled('text')`
  font-size: 40px;
  font-weight: bold;
  font-family: futura;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const TitleText2 = styled('text')`
  font-size: 40px;
  font-family: futura;
  color: #393D7A;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (prefers-color-scheme: dark) {
    color: #8A96DC;
  }
`;

export const DescriptionTextWhite1 = styled('text')`
  font-size: 20px;
  font-family: avenir;
  color: white;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }
`;

export const DescriptionText1 = styled('text')`
  font-size: 20px;
  font-family: avenir;
  color: #545966;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }
`;

export const ButtonText1 = styled('text')`
    font-size: 36px;
    font-weight: bold;
    font-family: avenir;
    @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Heading1 = styled('text')`
  font-size: 36px;
  max-lines: 44px;
  font-weight: bold;
  font-family: futura;

  @media (max-width: 600px) {
    font-size: 25px;
  }

`;

export const Heading2 = styled('text')`
  font-size: 50px;
  font-family: futura;
`;
export const Heading2W = styled('text')`
  font-size: 50px;
  font-family: futura;
  color: #fff;

  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const Heading3 = styled('text')`
  font-size: 30px;
  font-family: futura;
`;

export const Heading4 = styled('text')`
  font-size: 16px;
  max-lines: 24px;
  font-family: futura;
`;

export const SubTitleText = styled('text')`
    font-size: 30px;
    max-lines: 24px;
    font-family: avenir;

  @media (max-width: 600px) {
    font-size: 25px;
  }  
  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }
`;

export const DescriptionText = styled('text')`
  font-size: 18px;
  font-family: avenir;
  color: #545966;
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (prefers-color-scheme: dark) {
    color: #D3D8E8;
  }
`;
export const DescriptionTextW = styled('text')`
  font-size: 18px;
  font-family: avenir;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const DescriptionText2 = styled('text')`
  font-size: 24px;
  font-family: avenir;
`;

export const ButtonText = styled('text')`
    font-size: 16px;
    max-lines: 24px;
    font-weight: bold;
    font-family: avenir;
`;

export const ButtonText2 = styled('text')`
    font-size: 36px;
    max-lines: 24px;
    font-weight: bold;
    font-family: avenir;
    @media (max-width: 1000px) { 
   font-size: 25px;
  }
`;

export const CaptionText = styled('text')`
    font-size: 12px;
    max-lines: 20px;
    font-family: avenir;
`;
