import React, { Fragment } from "react";
import Item from "../Item/Item";

export default function ItemList() {
  const product = [
    {
      id: 0,
      name: "Moto e",
      img: "https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg",
      descripcion:
        "Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 50,
      stock: 4,
      comprar: 0,
    },
    {
      id: 1,
      name: "Moto g",
      img: "https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg",
      descripcion:
        "Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 80,
      stock: 0,
      comprar: 0,
    },
    {
      id: 2,
      name: "Moto z",
      img: "https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg",
      descripcion:
        "Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 30,
      stock: 8,
      comprar: 0,
    },
    {
      id: 3,
      name: "Moto x",
      img: "https://cdn.pixabay.com/photo/2016/10/12/16/32/smartphone-1735044_960_720.jpg",
      descripcion:
        "Android... Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 90,
      stock: 5,
      comprar: 0,
    },
  ];

  return (
    <Fragment>
      {product.map((element) => {
        return (
          (
            <Item
              name={element.name}
              img={element.img}
              descripcion={element.descripcion}
              price={element.price}
              stock={element.stock}
            />
          )
        );
      })}
    </Fragment>
  );
}