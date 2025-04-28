import styled from "styled-components";

export default function About() {
  return (
    <ProjectsContainer>
      <InfoContainer>
        <ElementContainer>
          {/* <Img src="/PodoStore.png" /> */}
          <a
            href="https://www.podo-store.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src="/Frame 1 (1).png" />
          </a>
          <Title>포도상점</Title>
          <Subtitle>Backend Developer</Subtitle>
          <Subtitle>2023.02 ~ 2023.07</Subtitle>
          <Content>Spring Boot, JPA, QueryDSL, AWS, MySQL</Content>
        </ElementContainer>
        <ElementContainer>
          <a
            href="https://www.podo-ticket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src="/Frame 2 (1).png" />
          </a>
          <Title>포도티켓</Title>
          <Subtitle>Backend Developer</Subtitle>
          <Subtitle>2023.08 ~ 2023.10</Subtitle>
          <Content>Spring Boot, JPA, QueryDSL, AWS, MySQL</Content>
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
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;
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

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: #212529;
  margin: 0.5rem 0;
  text-align: left;
  font-family: "42dot Sans", sans-serif;
  gap: 0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #212529;
  margin: 0.6rem 0 0 0;
  text-align: left;
  font-family: "42dot Sans", sans-serif;
`;

const Content = styled.h3`
  font-size: 1.1rem;
  color: #495057;
  margin: 0.2rem 0;
  width: 100%; // 이미지와 같은 너비로 설정
  max-width: 30rem;
  font-family: "42dot Sans", sans-serif;
`;
