import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navbar.css";

function AppNavbar({ activeTab, setActiveTab }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsNavExpanded(false); // Menutup navbar pada tampilan mobile setelah tautan diklik
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="border border-black border-5 rounded-bottom-5 loading-halaman"
      expanded={isNavExpanded}
    >
      <Container fluid>
        <Navbar.Brand className="fs-2 fw-bold ms-2" href="#" id="ehe">
          ArdiFjar443
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          className="customToggle border-3"
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {" "}
            {/* Mengatur tombol kanan pada tampilan desktop */}
            <Nav.Link
              className={`fs-3 modal-button ${
                activeTab === "home"
                  ? "text-light active-home rounded-2 p-2 border border-5 border-black"
                  : ""
              }`}
              href="#"
              id="content"
              onClick={() => handleTabClick("home")}
            >
              Home
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {" "}
            {/* Mengatur tombol kanan pada tampilan mobile */}
            <Nav.Link
              className={`fs-3 modal-button ${
                activeTab === "contact"
                  ? "text-light active-home rounded-2 p-2 border border-5 border-black"
                  : ""
              }`}
              href="#"
              id="content"
              onClick={() => handleTabClick("contact")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
