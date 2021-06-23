import React from "react";
import { CardComponet } from "../components/CardComponent";

export default function ItemListContainer() {
  let product = [
    { id: 0, name: "Moto e", price: 50, stock: 4, comprar: 0 },
    { id: 1, name: "Moto g", price: 80, stock: 0, comprar: 0 },
    { id: 2, name: "Moto z", price: 30, stock: 8, comprar: 0 },
    { id: 3, name: "Moto x", price: 90, stock: 5, comprar: 0 },
  ];

  return (
    <div>
      {/* Como puedo hacer esto con un for, porque si pongo los {} no me reconoce el html? */}
      <CardComponet name={product[0].name} price={product[0].price} stock={product[0].stock}/>
      <CardComponet name={product[1].name} price={product[1].price} stock={product[1].stock}/>
      <CardComponet name={product[2].name} price={product[2].price} stock={product[2].stock}/>
      <CardComponet name={product[3].name} price={product[3].price} stock={product[3].stock}/>
    </div>
  );
}
