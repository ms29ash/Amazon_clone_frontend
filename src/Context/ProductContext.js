import { createContext, useContext } from 'react';


const ProductContext = createContext();

export default ProductContext;

export const useProductContext = () => useContext(ProductContext);

