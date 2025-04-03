import styled from "styled-components";

export default function About() {
  return (
    <ProjectsContainer>
      <Greet>프로젝트 페이지</Greet>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Greet = styled.h2`
  font-family: "42dot Sans", sans-serif;
  color: #99582a;
  font-size: 2rem;
`;
