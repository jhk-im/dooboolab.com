import React, { CSSProperties, ReactElement } from 'react';

import { TextButton2 } from '../ui/Buttons';
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

function Button(props: Props): ReactElement {
  const { onClick, text, style } = props;
  return (
    <TextButton2 style={style} onClick={onClick} >
      <ButtonWrapper>
        {text}
      </ButtonWrapper>
    </TextButton2>
  );
}

export default Button;
