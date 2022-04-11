import { createContext, useContext } from 'react';


const ProductContext = createContext();

export default ProductContext;

export const ProContext = () => useContext(ProductContext);

