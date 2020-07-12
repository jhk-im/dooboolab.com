import React, { CSSProperties, ReactElement } from 'react';

import { ButtonText2 } from '../../utils/Texts';
import { ContactButton } from '../ui/Buttons';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  text?: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.div`
  flex: 1;
  width: 235px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) { 
    width: 180px;
  }

`;

function Button(props: Props): ReactElement {
  const { onClick, text, style } = props;
  return (
    <ContactButton style={style} onClick={onClick}>
      <ButtonWrapper>
        <ButtonText2>{text}</ButtonText2>
      </ButtonWrapper>
    </ContactButton>
  );
}

Button.defaultProps = {
  style: { display: 'flex', height: '60px' },
};

export default Button;
