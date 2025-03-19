import { styled, keyframes } from "styled-components";

export default function Navbar() {
  return (
    <Header>
      <NavContainer>
        <NavHome>
          김정윤
          <NavHomeDeco>_</NavHomeDeco>
        </NavHome>
        <NavItems>
          <NavItem>About</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Contact</NavItem>
        </NavItems>
      </NavContainer>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefae0;
  padding: 0 2rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  width: 80vw;
  padding: 0 2rem;
  border-bottom-color: #432818;
  border-bottom-width: 2.5px;
  border-bottom-style: solid;
`;

const NavHome = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #99582a;
  font-family: "42dot Sans", sans-serif;
  font-weight: 800;
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const NavHomeDeco = styled.span`
  animation: ${blink} 1.5s infinite;
  color: #432818;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.8rem;
`;

const NavItem = styled.span`
  margin: 0 1rem;
  color: #99582a;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #432818;
    bottom: 2px;
    left: 0;
  }
`;
