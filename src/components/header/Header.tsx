import React, { FC } from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import "./Header.scss"

const Header: FC = (): React.ReactElement => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Etno Dekor Miletic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Početna</Nav.Link>
            <Nav.Link href="/products">Proizvodi</Nav.Link>
            <Nav.Link href="/aboutUs">O nama</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="test">test</div>
    </header>
  );
};

export default Header;
