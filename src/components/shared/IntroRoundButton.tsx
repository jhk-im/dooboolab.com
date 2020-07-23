import React, { CSSProperties, ReactElement } from 'react';

import { IntroRoundButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  text?: string;
  href?: string;
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
  const { onClick, text, style, href } = props;

  return (
    <a href = { href } >
      <IntroRoundButton style={ style } onClick={ onClick } >
        <ButtonWrapper>
          { text }
        </ButtonWrapper>
      </IntroRoundButton>
    </a>
  );
}

export default Button;
