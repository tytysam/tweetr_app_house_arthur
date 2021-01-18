import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { IoHome } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="#home" style={{ fontSize: "35px" }}>
          Tweetr
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <IoHome size="1.5em" />
          </Nav.Link>
          <Nav.Link href="#features">
            <MdAccountCircle size="1.5em" />
          </Nav.Link>
          <Nav.Link href="#pricing">
            <IoMdSettings size="1.5em" />
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
