import React, { FC } from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { Link } from 'react-router-dom'
import "./Header.scss";

const Header: FC = (): React.ReactElement => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Etno Dekor Miletic</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Početna</Link>
            <Link to="/products">Proizvodi</Link>
          </Nav>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="/">Početna</Dropdown.Item>
            <Dropdown.Item href="/products">Proizvodi</Dropdown.Item>
          </DropdownButton>
      </Navbar>
    </header>
  );
};

export default Header;
