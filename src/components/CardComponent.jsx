import React from "react";
import { Card } from "react-bootstrap";
import { Counter } from "../components/counter/Counter";
export function CardComponet({ name, price, stock }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Android... Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Counter stock={stock} />
      </Card.Body>
    </Card>
  );
}
