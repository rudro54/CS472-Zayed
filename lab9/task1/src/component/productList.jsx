import Product from "./product";
import { useState } from "react";

const initialProducts = [
    { id: 1, name: "Apple", inStock: true },
    { id: 2, name: "Banana", inStock: false },
    { id: 3, name: "Cherry", inStock: true }
  ];

export default function ProductList() {
    let [product_list, updateProductList] =  useState(initialProducts)

    // lab requirments asked for a button, it could be solved with a checkbox and event delegation
    // let updateStock = function (event) {
    //     if (event.target.tagName === 'INPUT') {
    //         let target_id = parseInt(event.target.id)
    //         updateProductList(prev_product_list => prev_product_list.map(product =>
    //             product.id === target_id
    //                 ? { ...product, inStock: !product.inStock }
    //                 : product
    //         ));
    //     }

    // }

    let updateStock = (id) => {
        let target_id = parseInt(id)
        updateProductList(prev_product_list => prev_product_list.map(product =>
            product.id === target_id
                ? { ...product, inStock: !product.inStock }
                : product
        ));
    }

    return (
        // <ul onClick={(event) => updateStock(event)}>
        <ul>
            <li className="list-header">
                <span>Name | </span>
                <span>Price | </span>
                <span>InStock</span>
            </li>
            {product_list.map(i => <Product key={i.id} {...i} updateStock={updateStock}/>)}
        </ul>
    ) 
}  