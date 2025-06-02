import styled from "styled-components";

export default function PodoStore() {
  return (
    <ProjectContainer>
      <Title>Podo Store</Title>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 6rem;
  font-family: "42dot Sans", sans-serif;
`;

const Title = styled.h2`
  color: #212529;
  font-size: 12rem;
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  // font-family: "Anton", sans-serif;
`;
