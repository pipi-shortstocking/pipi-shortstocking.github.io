import styled from "styled-components";
import { AiOutlineGithub, AiOutlineLink, AiOutlineEdit } from "react-icons/ai";

export default function About() {
  return (
    <ProjectsContainer>
      <InfoContainer>
        <ElementContainer>
          <Img src="/Frame 1 (1).png" />
          <TitleContainer>
            <Title>포도상점</Title>
            <WebsiteLink href="https://www.podo-store.com/" target="_blank">
              <AiOutlineLink size={25} />
            </WebsiteLink>
            <IconLink href="https://github.com/Podo-Store/BE" target="_blank">
              <AiOutlineGithub size={25} />
            </IconLink>
            <IconLink
              href="https://velog.io/@jannie526/series/Podo-Store-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80"
              target="_blank"
            >
              <AiOutlineEdit size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>BE | 2023.04 ~ing</Subtitle>
          <Stack>- Spring Boot, JPA, MySQL, AWS, React, Docker, Swagger</Stack>
        </ElementContainer>
        <ElementContainer>
          <Img src="/Frame 2 (1).png" />
          <TitleContainer>
            <Title>포도티켓</Title>
            {/* <WebsiteLink href="https://www.podo-store.com/" target="_blank">
              <AiOutlineLink size={25} />
            </WebsiteLink> */}
            <IconLink href="https://github.com/Podo-Ticket/BE" target="_blank">
              <AiOutlineGithub size={25} />
            </IconLink>
            <IconLink
              href="https://velog.io/@jannie526/series/PODO-TICKET-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80"
              target="_blank"
            >
              <AiOutlineEdit size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>BE | 2024.10 ~ing</Subtitle>
          <Stack>
            - Node.js, Express.js, Sequlize, WebSocket, MySQL, AWS, React
          </Stack>
        </ElementContainer>
      </InfoContainer>
      <InfoContainer>
        <ElementContainer>
          <Img src="/Frame 4.png" />
          <TitleContainer>
            <Title>Blaybus 실전 앱 개발 경진대회</Title>
            <IconLink href="https://github.com/PepperStones/BE" target="_blank">
              <AiOutlineGithub size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>BE | 2025.01 ~ 2025.01</Subtitle>
          <Stack>- Spring Boot, JPA, MySQL, AWS, React, PWA, Swagger</Stack>
        </ElementContainer>
        <ElementContainer>
          <Img src="/Frame 3.png" />
          <TitleContainer>
            <Title>광운대학교 참빛설계학기</Title>
            <IconLink href="https://github.com/KW-MUJI" target="_blank">
              <AiOutlineGithub size={25} />
            </IconLink>
          </TitleContainer>
          <Subtitle>BE | 2024.08 ~ 2024.12</Subtitle>
          <Stack>- Spring Boot, JPA, MySQL, AWS, React, Swagger</Stack>
        </ElementContainer>
      </InfoContainer>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 2rem;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 30rem;
  max-width: 30rem;
  border: 1px solid #0000001a;
  border-radius: 20px;
  background-color: #f8f8f8;
  padding: 1rem 2rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 30rem;
  margin: 1rem 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: #212529;
  margin: 0 0.5rem 0 0;
  text-align: left;
  font-family: "42dot Sans", sans-serif;
`;

const Subtitle = styled.h2`
  font-size: 1.06rem;
  color: #212529;
  margin: 0.4rem 0 0 0rem;
  text-align: left;
  font-family: "42dot Sans", sans-serif;
`;

const Stack = styled.h3`
  font-size: 1rem;
  color: #495057;
  margin: 0.2rem 0;
  width: 100%; // 이미지와 같은 너비로 설정
  max-width: 30rem;
  font-family: "42dot Sans", sans-serif;
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
