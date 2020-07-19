import React, { CSSProperties, ReactElement } from 'react';

import { LogoButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  imgSrc?: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.div`
  margin-left: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const LogoImg = styled.img`
  width: 150px;
  object-fit: cover;
    
  @media (max-width: 1000px) {
    width: 120px;
    margin-top: 20px;
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
