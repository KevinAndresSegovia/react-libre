import React, { Fragment } from 'react'
import { Item } from "../Item"
export default function ItemList() {
    return (
        <Fragment>
            {product.map(element =>{
            return (
                <Item />
                )})}
        </Fragment>
    )
}
