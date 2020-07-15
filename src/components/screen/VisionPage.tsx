import { DescriptionText1, H1, TitleText2 } from '../../utils/Texts';
import React, { ReactElement } from 'react';

import { VISION_BACKGROUND } from '../../utils/Images';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 600px;
  background-image: url(${VISION_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    height: 400px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }

  @media (max-width: 400px) {
    height: 200px;
  }

`;

const ContentWrapper2 = styled.div`
  width: 100vw;
  padding: 50px;
  display: flex;
  background: #EBEAF4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background: #232323;
  }
`;

const ContentWrapper3 = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background: #2C2C2C;
  }
`;

const VisionItemLinearWrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 50px;
  flex: 1;
  flex-direction: column;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: center; 
`;

const VisionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vW;
  height: 300px;
`;

const VisionNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 

  width: 100px;
  height: 120px;
`;

const VisionItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 90%;
  height: 100%;
  border: 1px solid; 
  border-radius: 20px;
  border-color: #fff;
  border-color: rgba( 255, 255, 255, 0.1);
  margin-bottom: 50px;
`;

// Text Wrapper
const TitleTextWrapper1 = styled.div`
  width: 600px;
  padding: 100px;
  @media (max-width: 1000px) {
    width: 500px;
    padding: 80px;
  }
  @media (max-width: 800px) {
    width: 400px;
    padding: 60px;
  }
  @media (max-width: 600px) {
    width: 250px;
    padding: 50px;
  }
`;

const SubTitleTextWrapper1 = styled.div`
  width: 600px;
  padding: 20px;
`;

const DescriptionTextWrapper1 = styled.div`
  display: flex;
  width: 550px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

function Vision(): ReactElement {
  return (
    <Container>

      <ContentWrapper1>
        <TitleTextWrapper1>
          <H1>Vision & Mission</H1>
        </TitleTextWrapper1>
      </ContentWrapper1>

      <ContentWrapper2>
        <SubTitleTextWrapper1>
          <TitleText2>Our vision</TitleText2>
        </SubTitleTextWrapper1>
        <DescriptionTextWrapper1>
          <DescriptionText1>
          dooboolab wishes to help out those who are in trouble of making better society.
          We are a group of experts who contribute to various platforms and
          open source projects to work publicly for creating benefits.
          </DescriptionText1>
        </DescriptionTextWrapper1>
      </ContentWrapper2>

      <ContentWrapper3>
        <VisionItemLinearWrapper>
          <VisionItem>
            <VisionNumber>
              <TitleText2>01</TitleText2>
            </VisionNumber>
            <VisionItemBox>
              <DescriptionText1>
              We wish to get connected with great people who meet our vision,
              which is making a better society.
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
          <VisionItem>
            <VisionNumber>
              <TitleText2>02</TitleText2>
            </VisionNumber>
            <VisionItemBox>
              <DescriptionText1>
                If you have faced any problem in your boundary when trying to do
                some innovative things, please tell us your stories and be with us.
                Make sure that you meet our code of conduct below.
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
          <VisionItem>
            <VisionNumber>
              <TitleText2>03</TitleText2>
            </VisionNumber>
            <VisionItemBox>
              <DescriptionText1>
              Our Standard is to make a reasonable society which we know that
              it's hard to make it as a standard. However,
              we will try to communicate with many others,
              share experience and try to spread out things that are considered
              to be right.
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
          <VisionItem>
            <VisionNumber>
              <TitleText2>04</TitleText2>
            </VisionNumber>
            <VisionItemBox>
              <DescriptionText1>
              We wish to grow together with multiple stakeholders working for different things.
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
          <VisionItem>
            <VisionNumber>
              <TitleText2>05</TitleText2>
            </VisionNumber>
            <VisionItemBox>
              <DescriptionText1>
              Since bringing the standard is why we are working for,
              we only participate on the public work (no private).
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
          <VisionItem>
            <VisionNumber>
              <TitleText2>06</TitleText2>
            </VisionNumber>
            <VisionItemBox>
              <DescriptionText1>
              We want to grow to become a strong open source community
              for individuals, companies, and group of societies.
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
          <VisionItem>
            <VisionNumber>
              <TitleText2>07</TitleText2>
            </VisionNumber>
            <VisionItemBox>
              <DescriptionText1>
              Finally, we want to become a just society.
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
        </VisionItemLinearWrapper>

      </ContentWrapper3>

      <ContentWrapper2>
        <DescriptionTextWrapper1>
          <DescriptionText1>
          dooboolab wishes to help out those who are in trouble of making better society.
          We are a group of experts who contribute to various platforms and
          open source projects to work publicly for creating benefits.
          </DescriptionText1>
        </DescriptionTextWrapper1>
      </ContentWrapper2>

    </Container>
  );
}

export default Vision;
