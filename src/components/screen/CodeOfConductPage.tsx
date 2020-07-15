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
          <TitleText2>Our mission</TitleText2>
        </SubTitleTextWrapper1>
        <DescriptionTextWrapper1>
          <DescriptionText1>
          We expect dooboolab's contributors to act professionally and respectfully.
          All contributors should have their own self-observation ability so that our environment can grow wisely.
          </DescriptionText1>
        </DescriptionTextWrapper1>
      </ContentWrapper2>

      <ContentWrapper3>

        <SubTitleTextWrapper1>
          <TitleText2>
          we expect all contributors to avoid bad
          behaviors affected by bad culture
          </TitleText2>
        </SubTitleTextWrapper1>
        <VisionItemLinearWrapper>
          <VisionItem>
            <VisionItemBox>
              <DescriptionText1>
              • Discrimination. Equal treatment regardless of race, gender, age or sexual orientation.<br/>
              • Pointing out on other's appearance<br/>
              • Insulting one's parents or family members<br/>
              • Any kind of negative office or workplace politics speaking on other's opinion rather<br/>
                 than your own. Wrongfully judging and denoucing others.<br/>
              •  Violence and agressive attitudes We want all people to feel safe in our community.<br/>
              • Belittling others copyright infringement<br/>
              • Any behavior considered harmful to the community
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
        </VisionItemLinearWrapper>

        <SubTitleTextWrapper1>
          <TitleText2>
          We hope to contribute in creating a better world.
          </TitleText2>
        </SubTitleTextWrapper1>
        <VisionItemLinearWrapper>
          <VisionItem>
            <VisionItemBox>
              <DescriptionText1>
              • Respect people<br/>
              • Help others Don’t be afraid to speak up.<br/>
              • Anyone can make mistakes.<br/>
              • Grow with the community and take advantage of it.<br/>
              • Try to be rational rather than emotional.<br/>
              • Always train yourself to improve communication skills.
              </DescriptionText1>
            </VisionItemBox>
          </VisionItem>
        </VisionItemLinearWrapper>

      </ContentWrapper3>

    </Container>
  );
}

export default Vision;
