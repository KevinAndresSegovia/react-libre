import { React, CardComponet } from "react";

export function itemListContainer(props) {
    const product = [
        { id: 1, name: "Moto e", price: 50 },
        { id: 2, name: "Moto g", price: 80 },
        { id: 3, name: "Moto z", price: 30 },
        { id: 4, name: "Moto x", price: 90 },
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
