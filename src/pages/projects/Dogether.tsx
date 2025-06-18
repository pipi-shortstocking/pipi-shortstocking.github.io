import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

export default function Dogether() {
  return (
    <ProjectContainer>
      <Img src="/dogether.png" />
      <InfoContainer>
        <TitleContainer>
          <WebsiteLink
            href="https://github.com/PepperStones/BE"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Title>Blaybus 실전 앱 개발 경진대회</Title>
            <AiOutlineGithub size={35} />
          </WebsiteLink>
        </TitleContainer>
        <DateText>2025.01</DateText>
        <Subtitle1>👥 팀원 구성 및 역할</Subtitle1>
        <MemberContainer>
          <Member>BE 2명</Member>
          <Member>FE 2명</Member>
          <Member>DE 1명</Member>
          <Member>PM 1명</Member>
        </MemberContainer>
        <Content1>백엔드 개발자로 DB 설계 및 구축, API 개발</Content1>
        <Content2>
          - Enum 기반 설계를 통해 카테고리 타입 안정성 확보 및 유지보수 효율성
          향상
          <br />- 데이터 흐름에 맞춰 DB 스키마 설계 및 연동 로직 구현
        </Content2>
        <Subtitle1 style={{ marginBottom: "-0.2rem" }}>🛠️ 사용 기술</Subtitle1>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>BackEnd</Subtitle2>
        <StackContainer>
          <Stack>Spring Boot</Stack>
          <Stack>JPA</Stack>
          <Stack>MySQL</Stack>
        </StackContainer>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>API Docs</Subtitle2>
        <StackContainer>
          <Stack>Swagger</Stack>
        </StackContainer>
        <Subtitle1>✏️ 프로젝트 개요 및 목적</Subtitle1>
        <Content1>
          사내 성과 관리를 게이미피케이션 시스템을 통해 구성원의 동기부여 및
          조직 몰입도 향상을 목표로 한 서비스
        </Content1>
        <Content2 style={{ marginTop: "0.5rem" }}>
          - 업무 및 활동 수행에 따라 경험치를 부여하고 시각화함
          <br />- 관리자를 위한 백오피스 기능 제공 (구성원 조회, 게시글 작성,
          인사 지표 연동 등)
        </Content2>
        <Subtitle1>🛠️ 주요 기능 및 특징</Subtitle1>
        <Content2>
          - 활동 이력 기반 경험치 자동 부여 및 시각화
          <br />- 관리자용 어드민 페이지 기능 (구성원 목록, 게시판, 지표 동기화)
          <br />- PWA 기반 앱 제공으로 웹 모바일과 앱 환경 모두 지원
        </Content2>
        <Subtitle1>💻 본인 주요 작업 및 기여</Subtitle1>
        <Content1>DB 설계 및 구축</Content1>
        <Content2>
          - Enum을 활용해 퀘스트, 경험치 종류 및 카테고리 정형화 → 타입 안정성과
          유지보수 용이성 확보
          <br />- 사용자, 활동 이력, 경험치, 게시글 관련 테이블 설계 및 관계형
          데이터 모델링
        </Content2>
        <Content1>서버 API 개발</Content1>
        <Content2>
          - 로그인, 구성원 관리, 커스텀 등 주요 기능 API 설계 및 구현
          <br />- 어드민 페이지 API 설계 및 구현
        </Content2>
        <Subtitle1>🐛 트러블 슈팅</Subtitle1>
        <Content1>성과 시스템에 대한 도메인 이해 부족</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인 및 배경</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          다양한 지표(직무별 퀘스트, 리더부여 퀘스트, 전사 프로젝트, 인사평가
          등)가 복합적으로 구성되어 있어 도메인 구조 파악에 많은 시간이 소요됨 →
          초기 설계 논의 지연
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          담당자와의 소통 및 팀원 간의 지속적인 회의를 통해 성과 관리 시스템
          파악 → 데이터 흐름도 도식화 후 빠르게 구조 확정
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          3일 내 도메인 파악 완료 및 설계 착수 → 일정 지연 없이 DB 설계 및 API
          구현 본격화
        </Content2>
        <Subtitle1>🚀 설계/기술적 도전 경험 </Subtitle1>
        <Content1>
          Enum 기반 퀘스트, 경험치 종류 및 카테고리 설계 및 도입
        </Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 배경 및 문제 상황
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          다양한 유형의 경험치(업무, 자기계발, 조직문화 등)를 분류 없이 문자열로
          관리 → 데이터 정합성 저하 및 비즈니스 로직 처리 복잡도 증가
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 설계 방향 및 기술 선택
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          경험치 타입의 수는 한정적이고 변하지 않음 → 정형화 가능한 데이터로
          판단 → 자바의 Enum 타입 도입을 통해 경험치 유형을 코드 차원에서 제한 →
          타입 안정성 확보 및 유지보수 편의성 향상
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 구현 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          퀘스트, 경험치 종류를 Enum으로 정의 → Enum을 JPA @Enumerated
          어노테이션과 함께 사용해 DB에 저장 → Swagger 명세에도 Enum 값을
          명시하여 API 사용성 개선
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과 및 효과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          잘못된 입력 방지 및 타입 안정성 확보 및 데이터 정합성 향상 → FE와의
          협업 시 일관된 분류 기준 공유 가능 → 이후 기능 확장 시 Enum만 수정하면
          전체 로직 연동 가능 → 유지보수 효율 증가
        </Content2>
        <Subtitle1>🤝 협업 경험</Subtitle1>
        <Content1>
          주최 측 담담자와 PM, 개발자들 간의 질의응답 및 토의 진행
        </Content1>
        <Content2>
          - 성과 관리 시스템 체계를 정확하게 시각화 하기 위한 논의 진행
        </Content2>
        <Content1>Swagger를 활용한 API 명세 작성</Content1>
        <Content2>- FE와의 효율적인 인터페이스 협업</Content2>
        <Subtitle1>🎉 결과 및 성과 </Subtitle1>
        <Subtitle2>결과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          1. VER 1.0.0 MVP 개발 완료 및 PWA 형태로 배포
          <br />
          2. 구성원 대상 시연 행사에서 UX가 직관적이며 사용자의 동기부여에 관한
          긍정적인 피드백을 경험함
        </Content2>
        <Subtitle2 style={{ marginTop: "0.7rem" }}>성과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          사내 성과 관리 시스템을 실제 업무 맥락에 맞춰 프로토타이핑한 첫 경험
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
