import React from "react";
import "bootstrap/dist/css/bootstrap.css";
//import ReactDOM from 'react-dom'
import logo from "./logo.svg";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar
        className="menu_expandir"
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand href="#home">
          <img className="App-logo" src={logo} /> ReactLibre
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <nav>
            <NavDropdown title="Categorias">
              <Nav.Link href="smartphones">Smartphones</Nav.Link>
              <Nav.Link href="notebooks">Notebooks</Nav.Link>
              <Nav.Link href="tablets">Tablets</Nav.Link>
              <Nav.Link href="accesorios">Accesorios</Nav.Link>
            </NavDropdown>
          </nav>
          <Form inline>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Buscar producto"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Buscar</Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
