import React, { CSSProperties, ReactElement } from 'react';

import { SendEmailRoundButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  loading?: boolean;
  text?: string;
  onClick?: () => void;
}

const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
`;

function Button(props: Props): ReactElement {
  const { onClick, text, style, loading = false } = props;
  if (loading) {
    return <SendEmailRoundButton style={ style }>
      <Spinner id="spinner" />
    </SendEmailRoundButton>;
  }

  return (
    <SendEmailRoundButton style={ style } onClick={ onClick } >
      <ButtonWrapper>
        { text }
      </ButtonWrapper>
    </SendEmailRoundButton>
  );
}

export default Button;
