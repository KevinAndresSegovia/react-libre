import React from "react";

export function CardComponet(props) {
  return (
    <div className="card">
      <h1>{props.productData.name}</h1>
      <p>Foto 📱</p>
      <h2>Precio: {props.productData.price}</h2>
      <h2>Stock: {props.productData.stock}</h2>
      <h3 id={props.productData.id}>Voy a comprar: {props.productData.comprar}</h3>
      <button onClick={add(props.productData.comprar, props.productData.stock)} id={`addButton${props.productData.id}`}>Agregar ➕</button>
      {/* <button onClick={minus(props.productData.comprar, props.productData.stock)} id={`minusButton${props.productData.id}`}>Quitar ➖</button> */}
    </div>
  );
}

export function add(comprar, stock) {
  if (comprar < stock)
  return (console.log("Hola"))
  else return (console.log("Chau"))
}

/*
Logica para funcion ADD
if (comprar < stock){
  comprar ++
}
return (comprar)

Logica para funcion MINUS
if (comprar > 0) {
  comprar --
}
  return (comparar)
 */