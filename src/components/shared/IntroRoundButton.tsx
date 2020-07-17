import React, { CSSProperties, ReactElement } from 'react';

import { IntroRoundButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  text?: string;
  onClick?: () => void;
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

function Button(props: Props): ReactElement {
  const { onClick, text, style } = props;
  return (
    <IntroRoundButton style={ style } onClick={ onClick } >
      <ButtonWrapper>
        { text }
      </ButtonWrapper>
    </IntroRoundButton>
  );
}

export default Button;
