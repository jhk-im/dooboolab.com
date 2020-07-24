import React, { CSSProperties, ReactElement } from 'react';

import { MenuButton } from '../ui/Buttons';
import { device } from '../../theme';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  text?: string;
  href?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BottomLine = styled.div`
  height: 3px;
  width: 50px;
  margin-top: 3px;

  @media ${device.tablet} {
    width: 80px;
    margin-top: 5px;
  }   
`;

const SelectedButtonWrapper = styled.div`
  color: ${({ theme }): string => theme.colorAccent};
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SelectedBottomLine = styled.div`
  height: 3px;
  width: 50px;
  margin-top: 3px;
  background: ${({ theme }): string => theme.colorAccent};

  @media ${device.tablet} {
    width: 80px;
    margin-top: 5px;
  }    
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style, isSelected, href } = props;

  return (
    <a href = { href } >
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
    </a>
  );
}

export default Button;
