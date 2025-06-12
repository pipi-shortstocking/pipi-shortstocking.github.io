import styled from "styled-components";
import { AiOutlineLink, AiOutlineGithub, AiOutlineEdit } from "react-icons/ai";

export default function PodoStore() {
  return (
    <ProjectContainer>
      <Img src="/podo1.png" />
      <InfoContainer>
        <TitleContainer>
          <WebsiteLink
            href="https://www.podo-store.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Title>포도상점</Title>
            <AiOutlineLink size={35} />
          </WebsiteLink>
          <WebsiteLink
            href="https://github.com/Podo-Store/BE"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineGithub size={34} />
          </WebsiteLink>
          <WebsiteLink
            href="https://velog.io/@jannie526/series/Podo-Store-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineEdit size={34} />
          </WebsiteLink>
        </TitleContainer>
        <DateText>2024.04 ~ 진행 중</DateText>
        <Subtitle1>👥 팀원 구성 및 역할</Subtitle1>
        <MemberContainer>
          <Member>BE 2명</Member>
          <Member>FE 2명</Member>
          <Member>DE 1명</Member>
          <Member>PO 1명</Member>
        </MemberContainer>
        <Content1>VER 2.0.0까지 전체 백엔드 기능 단독 설계 및 구현</Content1>
        <Content2>
          - 작품 등록, 검색, IP 거래, 계약 자동화 등 핵심 기능 주도 개발
          <br />- 신규 BE 합류 전까지 모든 백엔드 기능 개발 담당 (신규 BE VER
          2.0.0 이후 합류)
          <br />- PO와 함께 사업 방향성 논의 및 OKR 수립 과정에 참여하여
          장기적인 방향 설정에 기여
        </Content2>
        <Subtitle1 style={{ marginBottom: "-0.2rem" }}>🛠️ 사용 기술</Subtitle1>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>BackEnd</Subtitle2>
        <StackContainer>
          <Stack>Spring Boot</Stack>
          <Stack>JPA</Stack>
          <Stack>MySQL</Stack>
          <Stack>Redis</Stack>
        </StackContainer>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>Infra</Subtitle2>
        <StackContainer>
          <Stack>AWS</Stack>
          <Stack>Docker</Stack>
        </StackContainer>
        <Subtitle2 style={{ fontSize: "1.33rem" }}>API Docs</Subtitle2>
        <StackContainer>
          <Stack>Swagger</Stack>
        </StackContainer>
        <Subtitle1>✏️ 프로젝트 개요 및 목적</Subtitle1>
        <Content1>
          복잡하고 비효율적인 기존 IP 계약 프로세스를 단순화 및 자동화하고,
          창작물의 유통 경로를 확장하여 IP 사용자와 효율적으로 매칭해주는 플랫폼
        </Content1>
        <Content2 style={{ marginTop: "0.5rem" }}>
          - 작품 유통 경로 부족 → 무료 연재 기능으로 창작물의 유통 경로 확보
          <br />
          - 계약 시 불공정 거래 및 법적 리스크 → IP 계약 자동화 기능으로 안정성
          확보
          <br />
          - 사내 창작팀 인건비 부담 완화 → 플랫폼 기반 IP 계약
          <br />
          - 신규 창작자 검증 프로세스 개선 → IP 검증 지표(작가 등급, 조회수,
          좋아요 등) 제공
          <br />
          - IP 계약 비용 절감 → 기존 대비 50% 이상 비용 절감 기대
          <br />
          <br />
        </Content2>
        <Content1 style={{ fontSize: "1.35rem" }}>
          ✔️ 현재 VER 2.0.0까지 개발 완료 후 구글 검색 엔진 상위 노출 중
        </Content1>
        <Subtitle1>🛠️ 주요 기능 및 특징</Subtitle1>
        <Content2>
          - 작품 등록 기능
          <br />
          - 작품 검색, 열람, 다운로드 기능
          <br />
          - IP 거래 및 계약 자동화 서비스
          <br />- IP 검증 기능 (작가 등급, 조회수, 좋아요 기반 검증 지표 제공)
        </Content2>
        <Subtitle1>💻 본인 주요 작업 및 기여</Subtitle1>
        <Content1>전체 백엔드 아키텍처 설계 및 구축</Content1>
        <Content2>
          - REST API 설계 및 구현 (작품 등록, 검색, 거래, 계약 프로세스 전체
          포함)
          <br />- MySQL 기반 DB 설계 및 인덱스 최적화
          <br />- Redis 캐싱 도입을 통한 조회수 관리 성능 최적화
          <br />- Swagger 기반 API 문서화 → FE 개발자와 협업 효율성 향상
        </Content2>
        <Subtitle1>🐛 트러블 슈팅 </Subtitle1>
        <Content1>
          '작품 상세' 페이지 진입 시, 미리보기 로딩 지연 문제 발생
        </Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          InputStreamResource를 통해 전체 PDF를 한 번에 전송 → 페이지 렌더링 시
          초기 로드 시간 과다 발생
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          StreamingResponseBody 적용 → PDF 데이터를 스트리밍 방식으로 전송하여
          초기 렌더링 속도 개선
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          대용량 파일(10MB 이상) 기준 평균 50%의 시간 단축
        </Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          배포 중인 서버에서 커넥션 누수 발생, 서버 다운 문제 발생
        </Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 원인</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          OSIV 패턴 사용으로 인해 영속성 컨텍스트가 HTTP 응답 종료 전까지 DB
          커넥션 유지
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 해결 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          spring.jpa.open-in-view=false 설정을 적용하여 OSIV 패턴 비활성화 처리
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          커넥션 누수 문제 해결 → DB 커넥션 안정성 확보 및 서버 안정화
        </Content2>
        <Subtitle1>🚀 설계/기술적 도전 경험 </Subtitle1>
        <Content1>Redis 기반 조회수 캐싱 설계 및 구현</Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 배경 및 문제 상황
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          사용자 증가 및 인기 작품에 우려되는 잦은 조회수 증가로 인해 MySQL에
          실시간 Write 트랜잭션 과다 발생 → DB 부하 증가 → 서버 비용 상승 및
          성능 저하 우려
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 설계 방향 및 기술 선택
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          조회수 데이터는 실시간 일관성이 절대적으로 필요하지 않음 → In-Memory
          캐싱을 통해 Write 트래픽 우회 설계 결정 → Redis 활용하여 조회수를
          1차로 저장 → 일정 주기로 MySQL에 배치 반영
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 구현 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          조회수 증가 시 Redis에 임시 저장 → 6시간 간격의 배치 작업으로 MySQL에
          일괄 업데이트 → 실시간 조회는 Redis 값을 우선으로 조회하도록 설계
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과 및 효과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          MySQL에 대한 실시간 Write 트래픽 감소 → DB 부하 경감 확인 → 조회수
          업데이트 성능 개선 및 서버 비용 절감
        </Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          OSIV 패턴 비활성화를 통한 트랜잭션 최적화
        </Content1>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 배경 및 문제 상황
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          미리보기 API 호출 시 OSIV 패턴 사용으로 인해 영속성 컨텍스트가 HTTP
          응답 종료 시점까지 DB 커넥션 유지 → 커넥션 누수 발생 → DB 커넥션 고갈
          문제 발생
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>
          - 설계 방향 및 기술 선택
        </Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          View 렌더링이 없는 API(예: StreamingResponseBody) → HTTP 응답 완료
          시점까지 DB 커넥션 유지 불필요 → OSIV 패턴 비활성화 적용 → 트랜잭션
          종료 시점에 커넥션을 즉시 반환하도록 설계
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 구현 방법</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          spring.jpa.open-in-view=false 설정 적용 → 트랜잭션 종료 시점에서 DB
          커넥션 반환 → HTTP 응답 처리 단계에서는 DB 커넥션 점유 해제
        </Content2>
        <Content2 style={{ marginLeft: "2.5rem" }}>- 결과 및 효과</Content2>
        <Content2 style={{ marginLeft: "4rem", fontWeight: "500" }}>
          커넥션 누수 문제 해결 → 서비스 전체 트랜잭션 안정성 확보 및 DB 커넥션
          자원 최적화
        </Content2>
        <Subtitle1>🤝 협업 경험</Subtitle1>
        <Content1>FE 개발자와 Swagger 기반 API 명세 협업</Content1>
        <Content2>- API 스펙 조율 및 문서화 주도</Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          PO, FE, DE 포함 주 1회 프로젝트 진행 상황 및 방향성 공유 회의 참여
        </Content1>
        <Content2>
          - 기술적 이슈 및 BE 개발 진행 상황 적극 공유, 우선순위 논의 및 일정
          조율
        </Content2>
        <Content1 style={{ marginTop: "0.5rem" }}>
          PO와 사업 방향성 논의 및 OKR 수립
        </Content1>
        <Content2>
          - 장기적인 방향 설정에 개발자 관점에서 의견 제시 및 논의
        </Content2>
        <Subtitle1>🎉 결과 및 성과 </Subtitle1>
        <Subtitle2>결과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          1. VER 2.0.0까지 서비스 핵심 기능 100% 구현 및 배포 완료
          <br />
          2. 구글 검색 엔진 상위 노출 → 서비스 접근성 향상
        </Content2>
        <Subtitle2 style={{ marginTop: "0.7rem" }}>성과</Subtitle2>
        <Content2 style={{ marginLeft: "2rem" }}>
          1. 2024 광운대학교 창업동아리 선정 (광운대학교 산학협력단)
          <br />
          2. 알파라운드 청년 창업 지원사업 알파청년 5기 선정 ((사)
          함께만드는세상)
          <br />
          3. 2025 광운대학교 캠퍼스타운 입주기업 선정 (광운대학교 캠퍼스타운)
          <br />
          4. 2025 아이디어 사업화 지원사업 선정 (한국콘텐츠진흥원)
          <br />
          5. 광운대학교 학생창업회사 14기 선정 (광운대학교 공학교육혁신센터)
          <br />
          6. 2025 광운대학교 창업동아리 선정 (광운대학교 산학협력단)
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
  margin: 0.5rem 0 0.3rem 0;
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
