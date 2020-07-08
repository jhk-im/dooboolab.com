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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

const LogoImg = styled.img`
  width: 150px;
  object-fit: cover;
    
  @media (max-width: 700px) {
    width: 100px;
    margin-top: 15px;
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
