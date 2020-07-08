import React, { CSSProperties, ReactElement } from 'react';

import { ButtonText } from '../../utils/Texts';
import { MenuButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  text?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;

`;

const BottomLine = styled.div`
  height: 3;
  width: 70%;
  @media (max-width: 1000px) {
    width: 95%;
  }
`;

const SelectedButtonWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  color: #B446BF;
`;

const SelectedBottomLine = styled.div`
  height: 3;
  width: 70%;
  background: linear-gradient(to right,#393D7A,#B446BF);
  @media (max-width: 1000px) {
    width: 95%;
  }
  
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style, isSelected } = props;
  return (
    <MenuButton style={style} onClick={onClick}>
      {isSelected ? (
        <SelectedButtonWrapper>
          <ButtonText>{text}</ButtonText>
          <SelectedBottomLine></SelectedBottomLine>
        </SelectedButtonWrapper>
      ) : (
        <ButtonWrapper>
          <ButtonText>{text}</ButtonText>
          <BottomLine id="bottom_line"></BottomLine>
        </ButtonWrapper>
      )}
    </MenuButton>
  );
}

Button.defaultProps = {
  style: { display: 'flex', height: '60px' },
};

export default Button;
