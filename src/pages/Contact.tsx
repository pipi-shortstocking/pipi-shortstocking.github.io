import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const body = encodeURIComponent(
      `Name: ${name}\n\nEmail: ${email}\n\Content: ${message}`
    );
    window.location.href = `mailto:jannie526@naver.com?body=${body}`;
  };

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
      <EmailForm>
        <RowContainer>
          <InfoContainer>
            <Label>이름</Label>
            <Input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InfoContainer>
          <InfoContainer>
            <Label>보내는 사람</Label>
            <Input
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InfoContainer>
        </RowContainer>
        <InfoContainer>
          <Label>내용</Label>
          <MailContent
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </InfoContainer>
        <SendButton onClick={handleSend}>Send</SendButton>
      </EmailForm>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin: 1rem 0;
  font-size: 3rem;
`;

const IconLink = styled.a`
  margin: 0 0.5rem;
`;

const GithubIcon = styled(IoLogoGithub)`
  color: black;
`;

const VelogIcon = styled(SiVelog)`
  color: #20c997;
`;

const LinkedInIcon = styled(FaLinkedin)`
  color: #0077b5;
`;

const InstagramIcon = styled(FaInstagram)`
  color: black;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 2rem;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  gap: 3rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 0;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #99582a;
  font-family: "42dot Sans", sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  height: 2rem;
  width: 20rem;
  background-color: #fefae0;
  border: none;
  border-bottom: 2px solid #432818;
  font-size: 1rem;
  color: #432818;
  font-family: "42dot Sans", sans-serif;
  &::placeholder {
    color: #b08968; /* placeholder 색상 변경 */
  }
  &:focus {
    outline: none;
  }
`;

const MailContent = styled.textarea`
  height: 10rem;
  width: 43rem;
  background-color: #fefae0;
  border: none;
  border-bottom: 2px solid #432818;
  font-size: 1rem;
  color: #432818;
  font-family: "42dot Sans", sans-serif;
  &::placeholder {
    color: #b08968; /* placeholder 색상 변경 */
  }
  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  background-color: #432818;
  color: #fefae0;
  font-size: 1.2rem;
  font-family: "Anton", sans-serif;
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  border: none;
  &:hover {
    background-color: #99582a;
  }
`;
