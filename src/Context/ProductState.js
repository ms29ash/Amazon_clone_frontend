import { useReducer } from 'react'
import ProductContext from './ProductContext'

const ProductState = ({ reducer, initialState, children }) => {
    return (
        <ProductContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductState;


