import React from "react";

export function CardComponet(props) {
  return (
    <div className="card">
      <h1>{props.productData.name}</h1>
      <p>Foto 📱</p>
      <h2>{props.productData.price}</h2>
      <button>Agregar al carrito 🛒</button>
    </div>
  );
}
