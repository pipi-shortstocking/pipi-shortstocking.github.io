import styled from "styled-components";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineEdit,
  AiOutlineAudit,
} from "react-icons/ai";

export default function About() {
  return (
    <AboutContainer>
      <ProfileContainer>
        <Img src="/IMG_0033.jpg" />
        {/* <Img src="/k.jpg" /> */}
        <Title>
          김정윤 | JeongYun Kim
          <ResumeLink
            href="https://my.surfit.io/w/313702032"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Resume"
          >
            <AiOutlineAudit size={28} />
          </ResumeLink>
        </Title>
        <Content>
          💻 Backend developer
          <br />
          🎓 Kwangwoon Univ, Software.
          <br />
          🍇 포도상점 Dev Team Manager & Backend developer
          <br />
          🍇 포도티켓 Backend developer
        </Content>
        <LinkContainer>
          <Link href="https://github.com/pipi-shortstocking" target="_blank">
            <AiOutlineGithub size={22} />
            Github
          </Link>
          <Link href="https://velog.io/@jannie526" target="_blank">
            <AiOutlineEdit size={22} />
            Blog
          </Link>
          <Link
            href="https://www.linkedin.com/in/jeongyun-kim-8596b632b/"
            target="_blank"
          >
            <AiOutlineLinkedin size={22} />
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/dev_pipi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <AiOutlineInstagram size={22} />
            Instagram
          </Link>
        </LinkContainer>
      </ProfileContainer>
      <InfoContainer>
        <ElementContainer>
          <Title>👩‍💻 About me</Title>
          <Content>
            기술을 위한 기술이 아닌 그 기술 너머에 존재하는 사용자에 집중합니다.
            NFC 기반 티켓 발권 시스템을 통해 평균 NPS 71.25라는 높은 사용자
            만족도를 달성했습니다.
            <br />
            <br />
            단순히 코드를 작성하는 것을 넘어, 효용성과 유지보수성을 최우선으로
            생각합니다. 이는 NFC 기반 티켓 발권 시스템에서 DB 쿼리 최적화를 통해
            ConnectionTimeOut 문제를 해결하고, 트랜잭션 로직 개선으로 데드락
            발생률을 90% 감소시킨 경험에서 잘 드러납니다.
            <br />
            <br />
            주기적으로 기술 뉴스레터를 읽고 관련 영상을 찾아보는 것을
            좋아합니다. 이를 통해 새로 알게 된 기술들을 실제로 적용해보며, 그
            과정에서 얻은 인사이트를 팀원들과 공유하며 함께 성장하기 위해
            노력합니다.
            <br />
            <br />
            '기록'의 중요성을 깊이 이해하고 실천합니다. 개발 과정에서의 문제와
            해결 방법, 새롭게 습득한 기술들을 꾸준히 개인 블로그와 SNS를 통해
            공유하고 있습니다. 이 과정은 저의 성장뿐만 아니라, 다른 개발자들과의
            지식 교류에도 큰 도움이 되고 있습니다.
          </Content>
        </ElementContainer>
        <ElementContainer>
          <Title>💻 Skills</Title>
          <Content>
            <Subtitle>BackEnd</Subtitle>
            <Content>
              - Spring Boot, JPA, Node.js, Express.js, Sequelize
            </Content>
            <Subtitle>Programming Languages</Subtitle>
            <Content>- Java, Python, JavaScript, C++</Content>
            <Subtitle>Cooperation Tools</Subtitle>
            <Content>- Jira, Slack</Content>
            <Subtitle>Database</Subtitle>
            <Content>- MySQL, Redis</Content>
            <Subtitle>Others</Subtitle>
            <Content>- Git, GitHub, AWS, Unity, Postman, Swagger</Content>
          </Content>
        </ElementContainer>
        <ElementContainer>
          <Title>🏆 Prize & Experience</Title>
          <Subtitle>2022 광운대학교 산학협력 SW 프로젝트 인기상</Subtitle>
          <Content> - 집안 환경 내 VR 메타버스 소아 응급처치 교육</Content>
          <Subtitle>
            2023 광운대학교 소프트웨어학부 졸업작품전시회 우수상
          </Subtitle>
          <Content>- 집안 환경 내 VR 메타버스 소아 응급처치 교육</Content>
          <Subtitle>청년취업사관학교 새싹(SeSAC) 영등포</Subtitle>
          <Content>- 웹 개발자 부트캠프 5기</Content>
          <Subtitle>2024 광운대학교 창업동아리</Subtitle>
          <Content>- 포도상점</Content>
          <Subtitle>알파라운드 청년 창업 지원사업 알파청년 5기</Subtitle>
          <Content>- 포도상점</Content>
          <Subtitle>2025 광운대학교 캠퍼스타운</Subtitle>
          <Content>- 포도상점</Content>
        </ElementContainer>
        <ElementContainer>
          <Title>🌐 License & Certificate</Title>
          <Subtitle>OPIc (외국어 말하기 평가, 영어)</Subtitle>
          <Content> - IH (Intermediate High)</Content>
        </ElementContainer>
      </InfoContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
`;

const ProfileContainer = styled.div`
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
  margin: 0 auto;
  position: sticky;
  top: 2rem; // 상단에서 20px 떨어진 위치에 고정
`;

const Img = styled.img`
  width: 100%;
  max-width: 30rem;
  margin: 1rem 0;
`;

const ResumeLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #212529;

  &:hover {
    color: #415a77;
  }

  &.active {
    background-color: #dee2e6;
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 230%;
    transform: translateX(-50%);
    background-color: #212529;
    color: #ffffff;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
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

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #212529;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f8f8;
  border: 1px solid #0000001a;
  box-shadow: 0 4px 15px #dee2e6;
  border-radius: 15px;
  padding: 0.5rem;

  &:hover {
    color: #212529;
    background-color: #e9ecef;
  }
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
