import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <AboutContainer>
      <GreetingContainer>
        <Img src="/IMG_0033.jpg" />
        <Greeting>안녕하세요:) 백엔드 개발자 김정윤입니다.</Greeting>
        <Content>
          기술을 위한 기술이 아닌, 실제 사용자의 삶에 긍정적인 영향을 미치는
          디지털 솔루션을 만들어 생활을 더 즐겁고 편리하게 만드는 것을
          좋아합니다.
        </Content>
      </GreetingContainer>
      <InfoContainer>
        <ContactContainer></ContactContainer>
      </InfoContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: auto;
  max-width: 37rem;
  border: 1px solid #0000001a;
  border-radius: 20px;
  background-color: #f8f8f8;
  padding: 1rem 2rem;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 1rem 0;
`;

const Greeting = styled.h1`
  font-size: 1.7rem;
  color: #212529;
  margin: 0;
  text-align: left;
`;

const Content = styled.h3`
  font-size: 1.2rem;
  color: #495057;
  margin: 0.5rem 0;
  width: 100%; // 이미지와 같은 너비로 설정
  max-width: 500px; // 이미지와 동일한 최대 너비
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: auto;
  max-width: 37rem;
  border: 1px solid #0000001a;
  border-radius: 20px;
  background-color: #f8f8f8;
  padding: 1rem 2rem;
  margin: 0 auto;
`;
