import React from 'react';
import { CardComponet } from "../components/CardComponent";

export default function Item() {
    return (
            <CardComponet name={element.name} img={element.img} descripcion={element.descripcion} price={element.price} stock={element.stock}/>
    )
}
