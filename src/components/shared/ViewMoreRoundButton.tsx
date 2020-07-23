import React, { CSSProperties, ReactElement } from 'react';

import { ViewMoreRoundButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  text?: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style } = props;
  return (
    <ViewMoreRoundButton style={ style } onClick={ onClick } >
      <ButtonWrapper>{ text }</ButtonWrapper>
    </ViewMoreRoundButton>
  );
}

export default Button;
