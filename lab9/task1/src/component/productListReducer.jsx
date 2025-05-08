import Product from "./product";
import { useReducer } from "react";

const initialProducts = [
    { id: 1, name: "Apple", inStock: true },
    { id: 2, name: "Banana", inStock: false },
    { id: 3, name: "Cherry", inStock: true }
  ];

function reducer(state, action) {
    switch (action.type) {
      case "TOGGLE_STOCK":
        return state.map((product) =>
          product.id === action.id
            ? { ...product, inStock: !product.inStock }
            : product
        );
      default:
        return state;
    }
  }

export default function ProductListReducer() {
    const [products, dispatch] = useReducer(reducer, initialProducts);
  
    const toggleStock = (id) => {
      dispatch({ type: "TOGGLE_STOCK", id });
    };
  
    return (
      <ul>
        <li className="list-header">
            <span>Name | </span>
            <span>Price | </span>
            <span>InStock</span>
        </li>
        {products.map((i) => (
          <Product
            key={i.id}
            {...i}
            updateStock={toggleStock}
          />
        ))}
      </ul>
    );
  }