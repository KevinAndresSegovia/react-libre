import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./containers/ItemListContainer";

export function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <ItemListContainer />
        </Row>
      </Container>
    </div>
  );
}
