import React, { CSSProperties, ReactElement } from 'react';

import { FooterButton } from '../ui/Buttons';
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
  align-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style } = props;
  return (
    <FooterButton style={ style } onClick={ onClick } >
      <ButtonWrapper>
        { text }
      </ButtonWrapper>
    </FooterButton>
  );
}

export default Button;
