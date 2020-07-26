import React, { CSSProperties, ReactElement } from 'react';

import { StoryTextButton } from '../ui/Buttons';
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
  width: 100%;
  padding: 5px;
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style, href } = props;
  return (
    <a href={ href }>
      <StoryTextButton style={ style } onClick={ onClick } >
        <ButtonWrapper>{ text }</ButtonWrapper>
      </StoryTextButton>
    </a>
  );
}

export default Button;
