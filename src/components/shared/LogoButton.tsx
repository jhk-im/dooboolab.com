import React, { CSSProperties, ReactElement } from 'react';

import { LogoButton } from '../ui/Buttons';
import { device } from '../../theme';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  imgSrc?: string;
  onClick?: () => void;
}
const ButtonWrapper = styled.div`
  margin-left: 20px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-top: 5px;
  width: 100px;
  object-fit: cover;

  @media ${device.tablet} {
    margin-top: 0px;
    width: 120px;
  }    
`;

function Button(props: Props): ReactElement {
  const { onClick, imgSrc, style } = props;
  return (
    <LogoButton style={style} onClick={onClick}>
      <ButtonWrapper>
        <LogoImg src={imgSrc}></LogoImg>
      </ButtonWrapper>
    </LogoButton>
  );
}

Button.defaultProps = {
  style: { display: 'flex', height: '60px' },
};

export default Button;
