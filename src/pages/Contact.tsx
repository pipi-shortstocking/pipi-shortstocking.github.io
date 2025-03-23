import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <Subtitle>편하게 연락주세요!</Subtitle>\
      <IconContainer>
        <GithubIcon />
        <VelogIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </IconContainer>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30rem;
`;

const Title = styled.h1`
  color: #432818;
  font-size: 6rem;
  margin: 0;
  font-family: "Anton", sans-serif;
`;

const Subtitle = styled.h3`
  color: #99582a;
  font-size: 1.7rem;
  margin: 0;
  font-family: "42dot Sans", sans-serif;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const GithubIcon = styled(IoLogoGithub)`
  font-size: 60px;
  color: black;
  margin: 0 0.5rem;
`;

const VelogIcon = styled(SiVelog)`
  font-size: 60px;
  color: #20c997;
  margin: 0 0.5rem;
`;

const LinkedInIcon = styled(FaLinkedin)`
  font-size: 60px;
  color: #0077b5;
  margin: 0 0.5rem;
`;

const InstagramIcon = styled(FaInstagram)`
  font-size: 60px;
  color: black;
  margin: 0 0.5rem;
`;
