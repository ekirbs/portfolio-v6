import { useState } from "react";
import {
  Header,
  Navbar,
  Divider,
  WorkHeader,
  Showcase,
  Techs,
  ProjectsNavbar,
  AboutHeader,
  About,
  ResumeDivider,
  Resume,
  ContactHeader,
  Contact,
  Footer,
} from "./components";
import { Main, Clock, Weather } from "./components/Projects";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Main");

  const renderPage = () => {
    if (currentPage === "Main") {
      return <Main />;
    }
    if (currentPage === "Clock") {
      return <Clock />;
    }
    return <Weather />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      <Navbar />
      <Divider />
      <WorkHeader />
      <Showcase />
      <Techs />
      <div className="projects-container">
        <ProjectsNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <AboutHeader />
      <About />
      <ResumeDivider />
      <Resume />
      <ContactHeader />
      <Contact />
      <Footer />
    </>
  );
}
