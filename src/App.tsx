import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import PodoStore from "./pages/projects/PodoStore.tsx";
import PodoTicket from "./pages/projects/PodoTicket.tsx";
import Dogether from "./pages/projects/Dogether.tsx";
import Muji from "./pages/projects/Muji.tsx";
import SaveKids from "./pages/projects/SaveKids.tsx";
import Contact from "./pages/Contact.tsx";
import styled from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/podostore" element={<PodoStore />} />
            <Route path="/projects/podoticket" element={<PodoTicket />} />
            <Route path="/projects/dogether" element={<Dogether />} />
            <Route path="/projects/muji" element={<Muji />} />
            <Route path="/projects/savekids" element={<SaveKids />} />
          </Routes>
        </Content>
        <Navbar />
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  user-select: none;
  overflow-x: hidden;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
