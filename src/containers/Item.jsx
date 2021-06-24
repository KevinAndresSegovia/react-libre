import React from 'react'
import { CardComponet } from '../components/CardComponent'

export default function Item() {
    return (
        <div>
{/*             {product.map((x)=> {
                return (
                <CardComponet name={product[x].name} price={product[x].price} stock={product[x].stock}/>
                    )
            })} */}
            <CardComponet name={product[0].name} price={product[0].price} stock={product[0].stock}/>
            <CardComponet name={product[1].name} price={product[1].price} stock={product[1].stock}/>
            <CardComponet name={product[2].name} price={product[2].price} stock={product[2].stock}/>
            <CardComponet name={product[3].name} price={product[3].price} stock={product[3].stock}/> 
        </div>
    )
}
