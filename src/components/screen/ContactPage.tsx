import React, { ReactElement } from 'react';

import styled from 'styled-components';

// Contact
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  margin-top: 10;
  margin-bottom: 150;
  padding : 30;
  background: grey;
  justify-content: space-around;
  align-items: center; 
`;

const ContactImage = styled.img`
  padding: 30;
  width: 300px;
  height: 200px;
`;

function Intro(): ReactElement {
  return (
    <ContactContainer>
      <ContactImage></ContactImage>
      <ContactImage></ContactImage>
    </ContactContainer>

  );
}

export default Intro;
