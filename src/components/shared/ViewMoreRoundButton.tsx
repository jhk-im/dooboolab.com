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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  width: 100%;
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
