import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

export default function Muji() {
  return (
    <ProjectContainer>
      <Img src="/kwmuji.png" />
      <InfoContainer>
        <TitleContainer>
          <WebsiteLink
            href="https://github.com/KW-MUJI"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Title>광운 대학 생활 도우미 - 광운 무인양품</Title>
            <AiOutlineGithub size={35} />
          </WebsiteLink>
        </TitleContainer>
        <DateText>2024.08 ~ 2024.12</DateText>
        <Subtitle1>👥 팀원 구성 및 역할</Subtitle1>
        <MemberContainer>
          <Member>BE 2명</Member>
          <Member>FE 2명</Member>
          <Member>DE 1명</Member>
        </MemberContainer>
        <Content1>
          백엔드 개발자로 회원 인증, 팀플 모집, 포트폴리오 등록 기능 등 핵심
          기능 개발
        </Content1>
        <Content2>
          - 본교 학생 인증 시, Redis를 사용해 인증 데이터 관리
          <br />- 스케줄링을 통한 팀플 모집 상태 자동 관리
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
          광운대학교 학생들의 학업 및 대외활동 효율화를 위한 통합 플랫폼
        </Content1>
        <Content2 style={{ marginTop: "0.5rem" }}>
          - 학업 및 대회활동을 위해 기존 커뮤니티 혹은 SNS를 통한 개인적인 연락
          → 하나의 플랫폼에서 제공
          <br />- 팀원 모집, 설문 조사, 일정 관리, 포트폴리오 등의 기능 통합 →
          프로젝트 및 대외 활동을 체계적이고 효율적으로 관리
        </Content2>
        <Subtitle1>🛠️ 주요 기능 및 특징</Subtitle1>
        <Content2>
          - 학교 메일 주소를 사용한 회원가입 및 로그인
          <br />- 팀플 모집 기능 (팀원 모집, 팀플 정보 등록 및 관리)
          <br />- 포트폴리오 등록 및 관리 기능
          <br />- 설문 조사 기능 (설문 생성, 응답 수집 및 결과 확인)
          <br />- 일정 관리 기능 (팀플, 개인 일정 관리 및 학교 공지사항 확인)
        </Content2>
        <Subtitle1>💻 본인 주요 작업 및 기여</Subtitle1>
        <Content1>본교 학생 인증</Content1>
        <Content2>
          - JavaMailSender를 활용한 이메일 인증번호 발송 기능 구현 → 학교 메일
          도메인만 가능
          <br />- Redis를 인증 데이터 저장소로 활용하여 메인 DB 간섭 최소화 및
          처리 속도 향상
        </Content2>
        <Content1>프로젝트 모집 및 포트폴리오 등록 기능</Content1>
        <Content2>
          - 마감일이 지난 프로젝트를 자동으로 비활성화하도록 @Scheduled 기반
          스케줄러 구현
          <br />- 등록한 포트폴리오 중 선택하여 프로젝트 지원 가능
        </Content2>
        <Subtitle1>🐛 트러블 슈팅</Subtitle1>
        <Content1>API 명세 일관성 문제</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          Notion으로 API 명세를 작성하는 과정에서 파라미터 누락, 응답 형식 오타
          등의 실수 발생 → FE와의 소통 오류 및 작업 지연
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          Swagger 적용을 통해 서버 코드 기반의 자동 API 문서화 도입
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          실시간으로 정확한 API 명세 제공 가능 → 변경 사항 공유 속도 향상 및
          개발 효율성 증가
        </Content2>
        <Subtitle1>🚀 설계/기술적 도전 경험 </Subtitle1>
        <Content1>Redis 기반 이메일 인증 캐싱 시스템 도입</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 배경 및 문제 상황
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          MySQL에 인증번호 저장 → 단기 트래픽 증가 → DB 부하 발생 및 응답 속도
          저하 우려
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 설계 방향 및 기술 선택
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          인증 데이터는 TTL이 명확하고 일회성이 강함 → In-Memory 캐싱에 적합 →
          Redis 선택
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 구현 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          인증번호를 Redis에 저장하고 TTL을 5분으로 설정 → 데이터 정합성과
          보안성 모두 확보
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과 및 효과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          메인 DB 부하 감소 및 응답 속도 향상으로 사용자 경험 개선
        </Content2>
        <Subtitle1>🤝 협업 경험</Subtitle1>
        <Content1>팀원들과 주 1회 회의 참여</Content1>
        <Content2>- 프로젝트 진행 상황 공유 및 개발 방향 논의</Content2>
        <Content1>Swagger를 통해 API 명세 공유</Content1>
        <Content2>- API 스펙 조율 및 문서화 주도</Content2>
        <Subtitle1>🎉 결과 및 성과 </Subtitle1>
        <Subtitle2>결과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          MVP 기준 모든 핵심 기능(회원가입, 팀 모집, 설문조사, 일정 관리 등)
          구현 완료
        </Content2>
        <Subtitle2 style={{ marginTop: "0.7rem" }}>성과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          광운대학교 참빛설계학기 프로젝트 전시회 참여 및 발표 경험
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
