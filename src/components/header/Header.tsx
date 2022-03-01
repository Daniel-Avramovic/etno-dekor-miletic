import React, { FC } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.scss";

const Header: FC = (): React.ReactElement => {
  // return (
  //   <header>
  //     <Navbar bg="dark" variant="dark">
  //       <Container>
  //         <Navbar.Brand href="#home">Etno Dekor Miletic</Navbar.Brand>
  //         <Nav className="me-auto">
  //           <Nav.Link href="/">Početna</Nav.Link>
  //           <Nav.Link href="/products">Proizvodi</Nav.Link>
  //           <Nav.Link href="/aboutUs">O nama</Nav.Link>
  //         </Nav>
  //       </Container>
  //     </Navbar>

  //     <div className="test">test</div>
  //   </header>
  // );

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Etno Dekor Miletic</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Početna</Nav.Link>
              <Nav.Link href="/products">Proizvodi</Nav.Link>
              <Nav.Link href="/aboutUs">O nama</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
