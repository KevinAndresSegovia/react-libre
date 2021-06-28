import React from "react";
import { Fragment } from "react";
import { CardComponet } from "../components/CardComponent";
//import { ItemList } from "../components/ItemList";


export default function ItemListContainer() {
  // para la Promise cambiar nombre de product a lista
  let product = [
    { id: 0, name: "Moto e", img:"https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg", descripcion:"Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 50, stock: 4, comprar: 0 },
    { id: 1, name: "Moto g", img:"https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg", descripcion:"Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 80, stock: 0, comprar: 0 },
    { id: 2, name: "Moto z", img:"https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg", descripcion:"Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 30, stock: 8, comprar: 0 },
    { id: 3, name: "Moto x", img:"https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg", descripcion:"Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 90, stock: 5, comprar: 0 },
  ];

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
                  {product.map(element =>{
            return (
                  <CardComponet name={element.name} img={element.img} descripcion={element.descripcion} price={element.price} stock={element.stock}/>
                )})}
                {/* <ItemList /> */}
    </Fragment>

  );
  
}