import React, { Fragment } from "react";
import ItemList from "../components/ItemList/ItemList";

export default function ItemListContainer() {
  /* const getProduct = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(lista)
    }, 2000)

  })
}
async function mostrarProductos (){
  const product = await getProduct()
  console.log(product)
}


mostrarProductos() */



  return (
    <Fragment>
      <ItemList />;
    </Fragment>
  );
}
