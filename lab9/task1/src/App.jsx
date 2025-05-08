import { useState } from 'react';
import ProductList from './component/productList'
import ProductListReducer from './component/productListReducer';

function App() {

  return (
    <>
      <h3>With useState</h3>
      <ProductList/>
      <h3>With useReducer</h3>
      <ProductListReducer/>
    </>
  )
}

export default App
