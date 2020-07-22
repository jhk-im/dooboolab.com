import React, { CSSProperties, ReactElement } from 'react';

import { MenuButton } from '../ui/Buttons';
import { device } from '../../theme';
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
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const BottomLine = styled.div`
  height: 3px;
  width: 50px;

  @media ${device.tablet} {
    width: 80px;
  }   
`;

const SelectedButtonWrapper = styled.div`
  height: 100%;
  color: ${({ theme }): string => theme.colorAccent};
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SelectedBottomLine = styled.div`
  height: 3px;
  width: 50px;

  @media ${device.tablet} {
    width: 80px;
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
            <BottomLine className="bottom_line"/>
          </ButtonWrapper>
      }
    </MenuButton>
  );
}

export default Button;
