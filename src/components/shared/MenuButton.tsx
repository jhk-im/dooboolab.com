import React, { CSSProperties, ReactElement } from 'react';
import { darkColor, lightColor } from '../../utils/colorlist';

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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const BottomLine = styled.div`
  height: 3px;
  width: 100px;

  @media (max-width: 1000px) {
    width: 80px;
  }

  @media (max-width: 800px) {
    width: 60px;
  }
  
  @media (max-width: 500px) {
    width: 50px;
  }
`;

const SelectedButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  
  @media (prefers-color-scheme: dark) {
    color: ${darkColor.TAB_BUTTON};
  }

  @media (prefers-color-scheme: light){
    color: ${lightColor.TAB_BUTTON};
  }
`;

const SelectedBottomLine = styled.div`
  height: 3px;
  width: 100px;

  @media (max-width: 1000px) {
    width: 80px;
  }
  
  @media (max-width: 600px) {
    width: 60px;
  }

  @media (max-width: 500px) {
    width: 50px;
  }
  
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
      {
        isSelected
          ? <SelectedButtonWrapper>
            { text }
            <SelectedBottomLine/>
          </SelectedButtonWrapper>
          : <ButtonWrapper>
            { text }
            <BottomLine id="bottom_line"/>
          </ButtonWrapper>
      }
    </MenuButton>
  );
}

export default Button;
