import React, { CSSProperties, ReactElement } from 'react';

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
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const BottomLine = styled.div`
  height: 3px;
  width: 80px;
`;

const SelectedButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 80%;
  }
  // dark mode
  @media (prefers-color-scheme: dark) {
    color: #B290B7;
  }
  // light mode
  @media (prefers-color-scheme: light){
    color: #B446BF;
  }
`;

const SelectedBottomLine = styled.div`
  height: 3px;
  width: 80px;
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right,#9497C2,#B290B7);
  }
  @media (prefers-color-scheme: light){
    background: linear-gradient(to right,#393D7A,#B446BF);
  }
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style, isSelected } = props;
  return (
    <MenuButton style={style} onClick={onClick} >
      {isSelected ? (
        <SelectedButtonWrapper>
          {text}
          <SelectedBottomLine></SelectedBottomLine>
        </SelectedButtonWrapper>
      ) : (
        <ButtonWrapper>
          {text}
          <BottomLine id="bottom_line"></BottomLine>
        </ButtonWrapper>
      )}
    </MenuButton>
  );
}

export default Button;
