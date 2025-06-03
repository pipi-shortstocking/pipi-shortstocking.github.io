import styled from "styled-components";

export default function PodoStore() {
  return (
    <ProjectContainer>
      <Img src="/podo1.png" />
      <InfoContainer>
        <TitleContainer>
          <Title>포도상점</Title>
          <DateText>2024.04 ~ 진행 중</DateText>
        </TitleContainer>
        <MemberContainer>
          <Member>BE 2명</Member>
          <Member>FE 2명</Member>
          <Member>DE 1명</Member>
          <Member>PO 1명</Member>
        </MemberContainer>
        <Content>
          창작자와 IP 사용자 간의 효율적인 매칭 시스템을 구축하고, 복잡한 계약
          프로세스를 단순화한 플랫폼. 또한, 대본 검색의 편의성을 개선하고 저작권
          침해 리스크를 최소화로 줄이며, 작품 활용 기회를 확장할 수 있는
          서비스를 제공함.
          <br />
          <br />
          작품 등록, 작품 선정 및 IP 거래 프로세스, 작품 열람 및 IP 사용
          프로세스를 포함하여 1.1.0 VER까지 개발되었고, 구글 검색엔진 상위에서
          노출 중
        </Content>
      </InfoContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-bottom: 6rem;
  max-width: 60rem;
  font-family: "42dot Sans", sans-serif;
`;

const Img = styled.img`
  width: 60rem;
  margin: 1rem 0;
  border-radius: 35px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 0.8rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #212529;
  margin: 0;
`;

const DateText = styled.h2`
  font-size: 1.2rem;
  color: #212529;
  margin: 0;
`;

const Content = styled.h3`
  font-size: 1.1rem;
  color: #495057;
  width: 100%;
  align-self: center;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  margin: 0.5rem 0 0 -0.2rem;
`;

const Member = styled.div`
  align-items: center;
  color: #212529;
  text-decoration: none;
  font-size: 0.85rem;
  background-color: #f8f8f8;
  border: 1px solid #0000001a;
  border-radius: 10px;
  padding: 0.4rem;
`;
