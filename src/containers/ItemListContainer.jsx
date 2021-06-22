import React from "react";
import { CardComponet } from "../components/CardComponent";

export default function ItemListContainer() {
  let product = [
    {id: 0, name: "Moto e", price: 50, stock: 4, comprar: 0},
    {id: 1, name: "Moto g", price: 80, stock: 0, comprar: 0},
    {id: 2, name: "Moto z", price: 30, stock: 8, comprar: 0},
    {id: 3, name: "Moto x", price: 90, stock: 5, comprar: 0},
  ];

  return (
    <div>
      <CardComponet productData={product[0]} />
      <CardComponet productData={product[1]} />
      <CardComponet productData={product[2]} />
      <CardComponet productData={product[3]} />
    </div>
  );
}
