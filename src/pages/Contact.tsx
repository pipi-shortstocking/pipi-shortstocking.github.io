import styled from "styled-components";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
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
          <AiOutlineGithub />
        </IconLink>
        <IconLink href="https://velog.io/@jannie526" target="_blank">
          <AiOutlineLink />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/jeongyun-kim-8596b632b/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/dev_pipi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
        >
          <AiOutlineInstagram />
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
  color: #212529;
  font-size: 7rem;
  margin: 0;
  // font-family: "Anton", sans-serif;
  font-family: "Bebas Neue", sans-serif;
`;

const Subtitle = styled.h3`
  color: #495057;
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
  color: #212529;
  font-family: "42dot Sans", sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  height: 2rem;
  width: 20rem;
  background-color: #f8f8f8;
  border: none;
  border-bottom: 2px solid #212529;
  font-size: 1rem;
  color: #212529;
  font-family: "42dot Sans", sans-serif;
  &::placeholder {
    color: #6c757d; /* placeholder 색상 변경 */
  }
  &:focus {
    outline: none;
  }
`;

const MailContent = styled.textarea`
  height: 10rem;
  width: 43rem;
  background-color: #f8f8f8;
  border: none;
  border-bottom: 2px solid #432818;
  font-size: 1rem;
  color: #212529;
  font-family: "42dot Sans", sans-serif;
  &::placeholder {
    color: #6c757d; /* placeholder 색상 변경 */
  }
  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  background-color: #212529;
  color: #f8f9fa;
  font-size: 1.6rem;
  // font-family: "Anton", sans-serif;
  font-family: "Bebas Neue", sans-serif;
  margin: 1.5rem 0;
  padding: 0.5rem 1.3rem;
  border: none;
  &:hover {
    background-color: #99582a;
  }
`;
