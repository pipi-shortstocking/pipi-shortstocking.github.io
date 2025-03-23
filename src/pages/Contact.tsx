import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <Subtitle>편하게 연락주세요!</Subtitle>
      <IconContainer>
        <IconLink href="https://github.com/pipi-shortstocking" target="_blank">
          <GithubIcon />
        </IconLink>
        <IconLink href="https://velog.io/@jannie526" target="_blank">
          <VelogIcon />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/jeongyun-kim-8596b632b/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/dev_pipi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
        >
          <InstagramIcon />
        </IconLink>
      </IconContainer>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25rem;
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
  margin: 2rem 0;
`;

const IconLink = styled.a`
  margin: 0 0.5rem;
`;

const GithubIcon = styled(IoLogoGithub)`
  font-size: 60px;
  color: black;
`;

const VelogIcon = styled(SiVelog)`
  font-size: 60px;
  color: #20c997;
`;

const LinkedInIcon = styled(FaLinkedin)`
  font-size: 60px;
  color: #0077b5;
`;

const InstagramIcon = styled(FaInstagram)`
  font-size: 60px;
  color: black;
`;
