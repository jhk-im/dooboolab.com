import styled from 'styled-components';

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

`;

export const DescriptionText = styled('text')`
  font-size: 18px;
  font-family: avenir;
  @media (max-width: 600px) {
    font-size: 12px;
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
