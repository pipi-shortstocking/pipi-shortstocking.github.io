import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineGithub, AiOutlineLink, AiOutlineEdit } from "react-icons/ai";

export default function About() {
  return (
    <ProjectsContainer>
      <InfoContainer>
        <ElementLink to="/projects/podostore">
          <Img src="/Frame 1 (1).png" />
          <TitleContainer>
            <Title>포도상점</Title>
            <WebsiteLink
              href="https://www.podo-store.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineLink size={25} />
            </WebsiteLink>
            <IconLink
              href="https://github.com/Podo-Store/BE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineGithub size={25} />
            </IconLink>
            <IconLink
              href="https://velog.io/@jannie526/series/Podo-Store-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineEdit size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>스토리 IP 거래 오픈마켓</Subtitle>
          <StackContainer>
            <Stack>Spring Boot</Stack>
            <Stack>JPA</Stack>
            <Stack>MySQL</Stack>
            <Stack>AWS</Stack>
            <Stack>Docker</Stack>
            <Stack>Swagger</Stack>
          </StackContainer>
        </ElementLink>
        <ElementLink to="/projects/podoticket">
          <Img src="/Frame 2 (1).png" />
          <TitleContainer>
            <Title>포도티켓</Title>
            <IconLink
              href="https://github.com/Podo-Ticket/BE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineGithub size={25} />
            </IconLink>
            <IconLink
              href="https://velog.io/@jannie526/series/PODO-TICKET-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineEdit size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>NFC 티켓 발권 서비스</Subtitle>
          <StackContainer>
            <Stack>Node.js</Stack>
            <Stack>Express.js</Stack>
            <Stack>Sequlize</Stack>
            <Stack>MySQL</Stack>
            <Stack>AWS</Stack>
            <Stack>Swagger</Stack>
            <Stack>WebSocket</Stack>
          </StackContainer>
        </ElementLink>
      </InfoContainer>
      <InfoContainer>
        <ElementLink to="/projects/dogether">
          <Img src="/Frame 4.png" />
          <TitleContainer>
            <Title>Blaybus 실전 앱 개발 경진대회</Title>
            <IconLink
              href="https://github.com/PepperStones/BE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineGithub size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>주식회사 두핸즈 인사관리 전용 앱</Subtitle>
          <StackContainer>
            <Stack>Spring Boot</Stack>
            <Stack>JPA</Stack>
            <Stack>MySQL</Stack>
            <Stack>AWS</Stack>
            <Stack>Docker</Stack>
            <Stack>Swagger</Stack>
          </StackContainer>
        </ElementLink>
        <ElementLink to="/projects/muji">
          <Img src="/Frame 3.png" />
          <TitleContainer>
            <Title>광운 대학 생활 도우미 - 광운 무인양품</Title>
            <IconLink
              href="https://github.com/KW-MUJI"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineGithub size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>
            광운대학교 학생들을 위한 학업 및 협업 효율화 플랫폼
          </Subtitle>
          <StackContainer>
            <Stack>Spring Boot</Stack>
            <Stack>JPA</Stack>
            <Stack>MySQL</Stack>
            <Stack>AWS</Stack>
            <Stack>Docker</Stack>
            <Stack>Swagger</Stack>
          </StackContainer>
        </ElementLink>
      </InfoContainer>
      <InfoContainer>
        <ElementLink to="/projects/savekids">
          <Img src="/Frame 5.png" />
          <TitleContainer>
            <Title>광운대학교 산학연계 SW프로젝트</Title>
            <IconLink
              href="https://github.com/pipi-shortstocking/SaveKids"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineGithub size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>
            집안 환경 내 VR 메타버스 소아 응급처치 교육 프로그램
          </Subtitle>
          <StackContainer>
            <Stack>Unity</Stack>
            <Stack>C#</Stack>
          </StackContainer>
        </ElementLink>
      </InfoContainer>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 6rem;
  font-family: "42dot Sans", sans-serif;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 2rem;
`;

const ElementLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 32.6rem;
  max-width: 32.6rem;
  border: 1px solid #0000001a;
  border-radius: 20px;
  background-color: #f8f8f8;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 20px #adb5bd55;
  }
`;

const Img = styled.img`
  width: 100%;
  margin: 1rem 0;
  border-radius: 13px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  color: #212529;
  margin: 0 0.5rem 0 0;
  text-align: left;
`;

const WebsiteLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.3rem 0 0;
  color: black;

  &:hover {
    color: #495057;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.15rem;
  color: #495057;
  margin: 0.4rem 0 0.3rem 0;
  text-align: left;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem 0 0;
  color: black;

  &:hover {
    color: #495057;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.4rem;
  margin: 0.5rem 0 0 -0.2rem;
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  color: #212529;
  text-decoration: none;
  font-size: 0.9rem;
  background-color: #ffffff;
  border: 1px solid #0000001a;
  border-radius: 10px;
  padding: 0.4rem;
`;
