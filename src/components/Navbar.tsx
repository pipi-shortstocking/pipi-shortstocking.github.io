import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineMail,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <NavItem to="/" data-tooltip="Home">
          <AiOutlineHome />
        </NavItem>
        <NavItem to="/about" data-tooltip="About">
          <AiOutlineUser />
        </NavItem>
        <NavItem to="/projects" data-tooltip="Projects">
          <AiOutlineCode />
        </NavItem>
        <NavItem to="/contact" data-tooltip="Contact">
          <AiOutlineMail />
        </NavItem>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: fixed; /* 화면에 고정 */
  bottom: 1.5rem; /* 화면 하단에 위치 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  padding: 0.7rem;
  box-shadow: 0 4px 15px #ced4da;
  width: 18rem;
  max-width: 18rem;
  font-size: 2rem;
  background-color: #ffffff;
`;

const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 20%;
  color: #212529;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: #ffffff;
  box-shadow: 0 4px 15px #dee2e6;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px #ced4da;
    color: #212529;
  }

  &.active {
    background-color: #dee2e6;
  }

  &::after {
    content: attr(data-tooltip); /* data-tooltip 속성의 값을 표시 */
    position: absolute;
    bottom: 70px; /* 아이콘 위에 표시 */
    left: 50%;
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
