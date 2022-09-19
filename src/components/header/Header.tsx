import React, { FC } from "react";
import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./Header.scss";

const Header: FC = (): React.ReactElement => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Etno Dekor Miletic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Početna</Nav.Link>
            <Nav.Link href="/products">Proizvodi</Nav.Link>
            <Nav.Link href="/aboutUs">O nama</Nav.Link>
          </Nav>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="/">Početna</Dropdown.Item>
            <Dropdown.Item href="/products">Proizvodi</Dropdown.Item>
            <Dropdown.Item href="/aboutUs">O nama</Dropdown.Item>
          </DropdownButton>
      </Navbar>
    </header>
  );
};

export default Header;
