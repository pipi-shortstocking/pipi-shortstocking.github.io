import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

export default function SaveKids() {
  return (
    <ProjectContainer>
      <YoutubeEmbed url="https://youtu.be/DecaSKC9MfY?si=h_3eXvF95GXjWTaR" />
      <InfoContainer>
        <TitleContainer>
          <WebsiteLink
            href="https://github.com/pipi-shortstocking/SaveKids"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Title>구해줘 키즈!</Title>
            <AiOutlineGithub size={35} />
          </WebsiteLink>
        </TitleContainer>
        <DateText>2022.07 ~ 2023.6</DateText>
        <Subtitle1>👥 팀원 구성 및 역할</Subtitle1>
        <MemberContainer>
          <Member>DEV 5명</Member>
        </MemberContainer>
        <Content1>VR 미니게임 개발 및 3D 환경 구축 담당 </Content1>
        <Subtitle1 style={{ marginBottom: "-0.2rem" }}>🛠️ 사용 기술</Subtitle1>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>VR</Subtitle2>
        <StackContainer>
          <Stack>Unity</Stack>
          <Stack>C#</Stack>
        </StackContainer>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>Assets</Subtitle2>
        <StackContainer>
          <Stack>Unity Asset Store</Stack>
        </StackContainer>
        <Subtitle1>✏️ 프로젝트 개요 및 목적</Subtitle1>
        <Content1>
          영유아의 기도폐쇄 사고를 사전에 예방하기 위해, 일상 속 사고 위험
          요소를 미니게임으로 체험하도록 구성한 부모 대상 VR 응급처치 교육
          프로그램
        </Content1>
        <Content2 style={{ marginTop: "0.5rem" }}>
          - 일반 가정의 식사 및 놀이 상황을 재현하여 질식 사고 예방 행동지침을
          게임화 → 부모의 직관적인 학습 효과 기대
        </Content2>
        <Subtitle1>🛠️ 주요 기능 및 특징</Subtitle1>
        <Content1>식사 과정</Content1>
        <Content2>
          - 미니게임 1) 아이가 식사 도중에 울면 울음을 그치게 하고 식사할 수
          있도록 함
          <br />- 미니게임 2) 딱딱한 음식과 부드러운 음식을 줄 때 삼키기 좋도록
          자를 수 있도록 함
          <br />- 미니게임 3) 아이의 목에 걸리기 쉬운 음식은 아이에게서 멀리
          두고, 아닌 음식은 가까이 두도록 함
          <br />- 미니게임 4) 뛰어다니거나 누워있는 아이를 자리에 앉혀 식사를 할
          수 있도록 함
        </Content2>
        <Content1>놀이 과정</Content1>
        <Content2>
          - 미니게임 5) 아이가 입안에 이물질을 물고 있을 때 시선을 돌려 스스로
          뱉을 수 있도록 함
          <br />- 미니게임 6) 다양한 물건들 중에서 목에 걸릴 위험이 있는 물건을
          골라낼 수 있도록 함
          <br />- 미니게임 7) 아이에게 위험한 장난감의 경우 아이의 손이 닿지
          않는 곳에 정리할 수 있도록 함
        </Content2>
        <Subtitle1>💻 본인 주요 작업 및 기여</Subtitle1>
        <Content1>집안 환경 구성</Content1>
        <Content2>
          - Unity Asset Store에서 가정집 내부 구조 및 가구 에셋을 활용해 VR 상의
          일반 가정 환경 제작
          <br />- 사용자 시점에서 자연스럽게 몰입할 수 있도록 시점 및 조작
          인터페이스 구현
        </Content2>
        <Content1>미니게임 개발</Content1>
        <Content2>
          - Raycast 기반으로 위험 요소와 상호작용할 수 있도록 설계
          <br />- ‘위험한 음식 치우기(미니게임3)’, ‘삼킬 수 있는 물건 주지
          않기(미니게임6)’ 등의 질식 사고 예방 미션 게임 구현
        </Content2>
        <Subtitle1>🐛 트러블 슈팅</Subtitle1>
        <Content1>공식문서 학습 역량 부족</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인 및 배경</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          Raycast 등 익숙하지 않은 기술을 사용할 때, 검색에 의존하다 보니
          해결까지 시간이 오래 걸림 → 이전까지 공식문서로 학습하는 방법에
          익숙하지 않아, 기술 이해도가 낮고 문제 해결 속도가 느림
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          필요한 기능을 구현할 때마다 Unity 공식문서를 기반으로 원리부터
          파악하며 점진적으로 학습
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          단순 구현을 넘어 기능의 원리와 내부 동작까지 이해하며 기술 학습 속도
          향상 → 이후 프로젝트에서도 공식문서를 우선 활용하는 습관 정착
        </Content2>
        <Content1>디자인 리소스 부족에 따른 작업 지연</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인 및 배경</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          초기에는 팀원이 직접 Unity 에셋 스토어를 통해 필요한 리소스를 직접
          찾는 방식으로 진행 → 비개발 업무에 많은 시간이 소요
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          협업 회사의 도움을 받아 사내 디자이너로부터 필요한 리소스를 요청하고
          공유받음
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          디자인 소요 시간 절감 → 전체 프로젝트 개발 속도 개선
        </Content2>
        <Subtitle1>🚀 설계/기술적 도전 경험 </Subtitle1>
        <Content1>Raycast 기반 상호작용 로직 설계 및 디버깅</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 배경 및 문제 상황
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          물건이 에셋의 중심에 박히거나 정확히 인식되지 않는 문제 발생
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 설계 방향 및 기술 선택
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          물체 인식은 물건의 바닥에서 수직으로 Ray를 쏘는 방식으로 변경 → 물체가
          놓인 ‘공간’을 인식하도록 함
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 구현 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          사용자 손에서 나가는 Ray로는 ‘선택 및 조작’, 물체 바닥에서 수직으로
          쏘는 Ray로는 ‘공간 인식 및 배치 확인’ → 물체 간의 충돌 범위가 정확히
          인식되도록 Collider 설정 보정 및 레이어 분리 적용
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과 및 효과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          물체의 잘못된 배치나 인식 오류 감소 → 사용자 경험 향상
        </Content2>
        <Subtitle1>🤝 협업 경험</Subtitle1>
        <Content1>주 1회 개발 회의 참여</Content1>
        <Content2>
          - 프로젝트 진행 상황 공유 및 산학 협력 회사와의 미팅 진행
          <br />- PPT 및 영상을 통해 실제 구현 모습을 보여주며 피드백을 받음
        </Content2>
        <Subtitle1>🎉 결과 및 성과 </Subtitle1>
        <Subtitle2>결과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          산학협력 SW 프로젝트 전시회 시연 및 발표 진행
        </Content2>
        <Subtitle2 style={{ marginTop: "0.7rem" }}>성과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          1. 2022 산학협력 SW 프로젝트 전시회 인기상
          <br />
          2. 2023 광운대학교 소프트웨어학부 졸업작품전시회 우수상 수상
        </Content2>
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

function YoutubeEmbed({ url }: { url: string }) {
  const match = url.match(
    /(?:youtube\.com\/.*v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/
  );
  const videoId = match ? match[1] : null;

  if (!videoId) return <div>잘못된 유튜브 링크입니다.</div>;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        margin: "1rem 0",
        width: "60rem",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}

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
  gap: 0.1rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #212529;
  margin: 0.5rem 0.2rem 0.3rem 0;
`;

const WebsiteLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0;
  color: #212529;
  gap: 0.2rem;

  & > svg {
    position: relative;
    top: 0.26em;
  }

  &:hover {
    color: #212529;
  }
`;

const Subtitle1 = styled.h2`
  font-size: 1.6rem;
  color: #212529;
  margin: 0.8rem 0 0.3rem 0;
`;

const Subtitle2 = styled.h2`
  font-size: 1.4rem;
  color: #212529;
  margin: 0.2rem 0 0.2rem 0.6rem;
`;

const DateText = styled.h2`
  font-size: 1.25rem;
  color: #212529;
  margin: -0.2rem 0 -0.5rem 0.1rem;
`;

const Content1 = styled.h3`
  font-size: 1.23rem;
  color: #495057;
  width: 100%;
  align-self: center;
  margin: 0 0 0 1.3rem;
`;

const Content2 = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  color: #495057;
  width: 100%;
  align-self: center;
  margin: 0.2rem 0 0 1.6rem;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  margin: 0 0 0.5rem 0.5rem;
`;

const Member = styled.div`
  align-items: center;
  color: #212529;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #f4f4f4;
  border: 1px solid #0000001a;
  border-radius: 10px;
  padding: 0.4rem;
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  margin: 0 0 0.2rem 1.1rem;
`;

const Stack = styled.div`
  align-items: center;
  color: #212529;
  text-decoration: none;
  font-size: 0.97rem;
  font-weight: 500;
  background-color: #f8f8f8;
  border: 1px solid #0000001a;
  border-radius: 10px;
  padding: 0.33rem;
`;
