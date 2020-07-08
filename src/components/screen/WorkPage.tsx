import { DescriptionText, Heading1 } from '../../utils/Texts';
import { IC_DOOBOO_UI, IC_HACKATALK, IC_PRIME } from '../../utils/Icons';
import React, { ReactElement } from 'react';

import styled from 'styled-components';

// Work 컨테이너
const WorkContainer = styled.div`
  margin-top:180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
   margin-top:150px;
  }

`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const WorkDescriptionWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const WorkItemListWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const WorkItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  margin-bottom: 30px;
`;

const WorkImageWrapper = styled.div`
  display: flex;
  padding: 10px;
  width: 400px;
  height: 400px;
  
  border: 0;
  outline: 0; 
  border-radius: 30px;
  border-style: solid;
  background-color: #000;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }
`;

const WorkImage = styled.img`
  size: cover;
  @media (max-width: 1000px) {
    width: 150px;
  }

  @media (max-width: 800px) {
    width: 100px;
  }
`;

const WorkTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 10px;
  width: 400px;
  height: 400px;

  @media (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }
`;

function Work(): ReactElement {
  return (
    <WorkContainer>
      <TitleWrapper>
        <Heading1>Work</Heading1>
      </TitleWrapper>
      <WorkDescriptionWrapper>
        <DescriptionText>
            We are a group of experts in IT technology development.
        </DescriptionText>
      </WorkDescriptionWrapper>

      <WorkItemListWrapper>
        <WorkItemWrapper>
          <WorkImageWrapper>
            <WorkImage src={IC_PRIME}/>
          </WorkImageWrapper>
          <WorkTextWrapper>
            <DescriptionText>
            상품관리, 주문관리,재고관리,
            고객관리가 모두 가능한
            쇼핑몰 통합 관리 솔루션
            </DescriptionText>
          </WorkTextWrapper>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <WorkTextWrapper>
            <DescriptionText>
            UI/UX 디자인,프론트앤드 개발에
            필요한 오픈소스 제공
            </DescriptionText>
          </WorkTextWrapper>
          <WorkImageWrapper>
            <WorkImage src={IC_DOOBOO_UI}/>
          </WorkImageWrapper>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <WorkImageWrapper>
            <WorkImage src={IC_HACKATALK}/>
          </WorkImageWrapper>
          <WorkTextWrapper>
            <DescriptionText>
            hackatalk은 현재 React-Native-Seoul
            Meetup에서 진행중인 오픈소스 프로젝트
            </DescriptionText>
          </WorkTextWrapper>
        </WorkItemWrapper>
      </WorkItemListWrapper>

    </WorkContainer>
  );
}

export default Work;
