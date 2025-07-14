import styled from "styled-components";
import { AiOutlineGithub, AiOutlineEdit } from "react-icons/ai";

export default function PodoTicket() {
  return (
    <ProjectContainer>
      <Img src="/podoticket.png" />
      <InfoContainer>
        <TitleContainer>
          <WebsiteLink
            href="https://github.com/Podo-Ticket/BE"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Title>포도티켓</Title>
            <AiOutlineGithub size={35} />
          </WebsiteLink>
          <WebsiteLink
            href="https://velog.io/@jannie526/series/PODO-TICKET-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineEdit size={34} />
          </WebsiteLink>
        </TitleContainer>
        <DateText>2024.10 ~ 진행 중</DateText>
        <Subtitle1>👥 팀원 구성 및 역할</Subtitle1>
        <MemberContainer>
          <Member>BE 2명</Member>
          <Member>FE 2명</Member>
          <Member>DE 1명</Member>
          <Member>PO 1명</Member>
        </MemberContainer>
        <Content1>VER 1.2.0까지 전체 백엔드 기능 단독 설계 및 구현</Content1>
        <Content2>
          - 예매 확인, 좌석 선택, 좌석 잠금 등 핵심 기능 주도 개발
          <br />- 신규 BE 합류 전까지 모든 백엔드 기능 개발 담당 (신규 BE VER
          1.2.0 이후 합류)
          <br />- PO와 함께 사업 방향성 논의 및 OKR 수립 과정에 참여하여
          장기적인 방향 설정에 기여
        </Content2>
        <Subtitle1 style={{ marginBottom: "-0.2rem" }}>🛠️ 사용 기술</Subtitle1>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>BackEnd</Subtitle2>
        <StackContainer>
          <Stack>Node.js</Stack>
          <Stack>Express.js</Stack>
          <Stack>Sequelize</Stack>
          <Stack>MySQL</Stack>
          <Stack>Redis</Stack>
          <Stack>WebSocket</Stack>
        </StackContainer>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>Infra</Subtitle2>
        <StackContainer>
          <Stack>AWS</Stack>
        </StackContainer>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>API Docs</Subtitle2>
        <StackContainer>
          <Stack>Swagger</Stack>
        </StackContainer>
        <Subtitle1>✏️ 프로젝트 개요 및 목적</Subtitle1>
        <Content1>
          NFC 기반의 자동 발권 시스템으로, 소규모 공연 단체의 발권 업무를
          자동화하고 관객의 좌석 선택 자유도 향상 및 대기 시간 단축을 목표로
          하는 티켓 발권 서비스
        </Content1>
        <Content2 style={{ marginTop: "0.5rem" }}>
          - 1명 이상의 상주 스텝 필요 → NFC 태그 기반 자동 발권으로 인력 불필요
          <br />
          - 관객 대기 시간 문제 (스텝 1명당 1명의 관객 응대) → 동시 발권 가능,
          발권 속도 15~30초 (2~4배 향상)
          <br />
          - 운영 이슈 → ADMIN 기능을 통한 좌석 및 티켓 관리 기능 제공
          <br />
          <br />
        </Content2>
        <Content1 style={{ fontSize: "1.35rem" }}>
          ✔️ 실제 공연 12회 운영, 총 누적 관객 449명을 대상으로 서비스 실사용 및
          개선 반복 중
        </Content1>
        <Subtitle1>🛠️ 주요 기능 및 특징</Subtitle1>
        <Content2>
          - NFC 태그 기반 엑세스 가능
          <br />
          - 예매 확인, 좌석 선택, 발권 기능
          <br />
          - WebSocket 기반 실시간 현장 예매 확인
          <br />- ADMIN 티켓 및 좌석 관리(좌석 잠금 삭제, 발권 현황) 대시보드
        </Content2>
        <Subtitle1>💻 본인 주요 작업 및 기여</Subtitle1>
        <Content1>전체 백엔드 아키텍처 설계 및 구축</Content1>
        <Content2>
          - 전체 백엔드 API 설계 및 구현 (좌석 선택, 예매, 발권, ADMIN 등)
          <br />- MySQL 기반 DB 설계 및 트랜잭션 처리 로직 최적화
          <br />- WebSocket을 통한 실시간 현장 예매 처리 구현 및 성능 개선
          <br />- 운영 데이터 기반 문제 해결 및 성능 분석
          <br />- Swagger 기반 API 문서화 → FE 개발자와 협업 효율성 향상
        </Content2>
        <Subtitle1>🐛 트러블 슈팅 </Subtitle1>
        <Content1>약 10명 발권 이후 ConnectionTimeout 발생</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인 및 배경</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          parseInt() 미처리로 인한 데이터 타입 불일치 → 트랜잭션 재시도 증가로
          커넥션 과부하 유발
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          쿼리 최적화 및 트랜잭션 처리 개선, parseInt()를 통해 타입 정제 →
          유효성 검사 정상 수행 및 DB 커넥션 점유 시간 단축
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          데이터 타입 불일치로 인한 에러 발생률 100% 감소
        </Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          대규모 데이터 처리 중 데드락 발생
        </Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인 및 배경</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          불필요한 행 락 과다 사용, REPEATABLE_READ 격리 수준의 갭 락 → 락 경합
          유발 및 순환 대기 상태 발생
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          트랜잭션 격리 수준 조정, 락 방식 변경, 배치 처리 도입 → 락 범위 축소
          및 동시 락 개수 감소로 락 보유 시간 70% 단축, 동시 처리량 3배 향상
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          대규모 데이터 처리 시 데드락 발생률 100% 감소
        </Content2>
        <Subtitle1>🚀 설계/기술적 도전 경험 </Subtitle1>
        <Content1>WebSocket 도입을 통한 서버 부하 개선</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 배경 및 문제 상황
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          ADMIN의 현장 예매 수락 처리를 위해 클라이언트가 3초마다 GET
          요청(Polling)을 보내는 방식 사용 → 사용자 수 증가 시 DB 과부하 및
          네트워크 트래픽 증가 → Connection Timeout 및 서버 비용 증가,
          실시간성이 중요한 예매 프로세스에 심각한 지연 발생
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 설계 방향 및 기술 선택
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          Polling은 실시간성이 낮고, 서버 부하 및 자원 소비가 과도함 → 이벤트
          기반 양방향 통신이 가능하며 실시간성이 좋고, 자원 소비가 적은
          WebSocket 도입 → ADMIN에서 수락/거절을 선택했을 때만 서버가 해당
          정보를 전송하여 불필요한 요청 제거
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 구현 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          ADMIN의 수락/거절의 액션 발생 시 서버에서 WebSocket 메세지 전송 →
          클라이언트는 주기적인 요청 없이 서버로부터 실시간 수락 여부 수신
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과 및 효과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          Polling 방식 대비 평균 50% 이상의 응답 및 대기 시간 단축 → DB 접근
          횟수 감소 → Connection Timeout 문제 해결 → 서버 비용 절가, 현장
          예매자의 서비스 경험 만족도 향상
        </Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          쿼리 리팩토링을 통한 DB 성능 개선
        </Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 배경 및 문제 상황
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          초기 API 다수에서 비효율적인 쿼리로 다음과 같은 문제 발생
          <br />
          1) 동일 요청 내 반복되는 조회/갱신 로직 → 불필요한 DB 접근 과다
          <br />
          2) 트랜잭션 부재 → API 응답 속도 저하, 병목 구간에서 DB Connection
          부하 심화
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 설계 방향 및 기술 선택
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          1) 중복 쿼리 제거 및 서브쿼리 병합을 통해 DB 접근 횟수 최소화
          <br />
          2) 트랜잭션 처리 추가
          <br />
          3) 쿼리 실행 순서 최적화로 DB Lock 경합 최소화
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 구현 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          1) 기존에는 '예약 가능 인원 확인'을 2개의 쿼리로 처리 → 서브쿼리를
          포함한 단일 Sequelize 문으로 병합하여 DB 접근 최소화
          <br />
          2) 각 API에서 트랜잭션 적용 구간을 명확히 정의하고, 필요에 따라 격리
          수준 설정 수준 설정
          <br />
          3) 예약자 중복 여부 확인보다 인원 초과 여부를 확인 → 기존에는 100명
          모두 중복 여부 확인을 위한 Lock 대기 → 개선 이후, 좌석 부족으로최대
          95명이 먼저 차단, 나머지 5명만 Lock 대기 → DB Lock 경합 최소화
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과 및 효과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          1) 사전 예매 로직: 14.22초 → 13.37초 (약 6% 성능 개선)
          <br />
          2) 현장 발권 로직: 26.56초 → 20.57초 (약 23% 성능 개선)
          <br />
          3) 반복 쿼리 제거 및 쿼리 병합으로 DB 접근 횟수 대폭 감소 → 서버 부하
          및 대기 시간 감소
        </Content2>
        <Subtitle1>🤝 협업 경험</Subtitle1>
        <Content1>FE 개발자와 Swagger 기반 API 명세 협업</Content1>
        <Content2>- API 스펙 조율 및 문서화 주도</Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          모든 팀원들과 주 1회 프로젝트 진행 상황 및 방향성 공유 회의 참여
        </Content1>
        <Content2>
          - 현장 운영을 통해 발생한 문제점 및 개선 사항 논의 및 기술 개선 방향
          논의
          <br />- JIRA를 활용한 이슈 관리 및 진행 상황 공유
        </Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          사업 방향성 논의 및 OKR 수립
        </Content1>
        <Content2>- 서비스 방향 설정 및 장기 목표 수립 과정에 참여</Content2>
        <Subtitle1>🎉 결과 및 성과 </Subtitle1>
        <Subtitle2>결과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          1. 총 3개 연극 단체 대상 O2O 서비스 제공
          <br />
          2. 총 누적 관객 449명 대상 서비스 운영
        </Content2>
        <Subtitle2 style={{ marginTop: "0.7rem" }}>성과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          1. 2025 광운대학교 창업동아리 선정 (광운대학교 산학협력단)
          <br />
          2. 사용자 만족도 평균 4.92 / 5.0
          <br />
          3. NPS(순고객추천지수) 80.00 → 기존 발권 방식 대비 상위 10% 수준의
          만족도
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
  margin: -0.3rem 0 -0.5rem 0.1rem;
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
