import { Icon, device } from '../../theme';
import React, { ReactElement } from 'react';

import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

const Container = styled.div`
  height: 50px;
  width: 100px;
  position: absolute;
  right: 0px;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;

  @media ${device.tablet} {
    height: 70px;
  }
`;

function Toggle(props: Props): ReactElement {
  const { onClick } = props;
  // const ToggleButton = Icon.toggle[0];
  // const ToggleIcon = Icon.toggle[1];
  // const ToggleRact = Icon.toggle[2];
  const ToggleButton = Icon.toggle_darkMode;

  return (
    <Container>
      <ToggleButton onClick={ onClick }/>
      {/* <ToggleButton/> */}
      {/* <ToggleRact/> */}
      {/* <ToggleIcon/> */}
    </Container>
  );
}

export default Toggle;
