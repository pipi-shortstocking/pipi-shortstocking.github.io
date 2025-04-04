import styled from "styled-components";

export default function Home() {
  return (
    <HomeContainer>
      <Title>JeongYun Kim</Title>
      <Subtitle>Backend Developer</Subtitle>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

const Title = styled.h2`
  color: #212529;
  font-size: 12rem;
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  // font-family: "Anton", sans-serif;
`;

const Subtitle = styled.h3`
  color: #495057;
  font-size: 2.5rem;
  margin: -3rem 0 0 0;
  font-family: "Bebas Neue", sans-serif;
  // font-family: "Anton", sans-serif;
`;
