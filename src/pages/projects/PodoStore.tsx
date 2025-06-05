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
        <Subtitle1>📣 프로젝트 개요</Subtitle1>
        <Content>
          창작자와 IP 사용자 간의 효율적인 매칭 시스템을 구축하고, 복잡하고
          비효율적인 기존의 IP 계약 프로세스를 단순화한 플랫폼입니다. 사용자는
          플랫폼 내에서 작품을 손쉽게 등록하고, 다양한 작품을 검색 및 열람할 수
          있으며, IP 거래부터 사용까지의 전 과정을 간편하게 처리할 수 있습니다.
        </Content>
        <Subtitle2>기획 목적</Subtitle2>
        <Content>
          1. 작품 유통 경로 부족 : 플랫폼 내 무료 연재 기능으로 창작물의 유통
          경로 확보
          <br />
          2. 계약 시 불공정 거래 및 법적 문제 위험 : IP 계약 자동화 기능을 통해
          계약의 안정성 보장
          <br />
          3. 사내 창작팀 운영 시 인건비 부담 : 언제든 플랫폼에서 IP 계약이
          가능하므로 인건비 부담 완화
          <br />
          4. 신규 창작자 검증 : 작가 등급, 조회수, 좋아요 등 IP 검증 지표를 통해
          검증 및 탐색 시간 단축 가능
          <br />
          5. IP 계약 비용 부담 : IP 계약 자동화 기능으로 기존 대비 50% 이상의
          비용 절감 효과 기대
          <br />
          <br />
          ✔️ 대본 검색의 편의성을 극대화 하고, 작품 활용 기회를 넓힐 수 있는
          서비스를 제공합니다.
          <br />
          ✔️ 작품 등록, 작품 열람 및 IP 거래 등의 핵심 프로세스를 포함하여 VER
          2.0.0까지 개발이 완료되었습니다.
          <br />
          ✔️ 현재 구글 검색 엔진 상위에 노출되고 있습니다.
        </Content>
        <Subtitle1>📣 사용 기술</Subtitle1>
      </InfoContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-bottom: 9rem;
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
  font-size: 2.5rem;
  color: #212529;
  margin: 0.5rem 0 0.3rem 0;
`;

const Subtitle1 = styled.h2`
  font-size: 1.55rem;
  color: #212529;
  margin: 1.5rem 0 0.3rem 0;
`;

const Subtitle2 = styled.h2`
  font-size: 1.4rem;
  color: #212529;
  margin: 1.5rem 0 0.3rem 0;
`;

const DateText = styled.h2`
  font-size: 1.25rem;
  color: #212529;
  margin: 0;
`;

const Content = styled.h3`
  font-size: 1.2rem;
  color: #495057;
  width: 100%;
  align-self: center;
  margin: 0;
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
  font-size: 0.9rem;
  background-color: #f8f8f8;
  border: 1px solid #0000001a;
  border-radius: 10px;
  padding: 0.4rem;
`;
