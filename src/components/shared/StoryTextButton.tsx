import React, { CSSProperties, ReactElement } from 'react';

import { StoryTextButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  text?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 5px;
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style } = props;
  return (
    <StoryTextButton style={ style } onClick={ onClick } >
      <ButtonWrapper>{ text }</ButtonWrapper>
    </StoryTextButton>
  );
}

export default Button;