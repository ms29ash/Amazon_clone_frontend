import React from 'react'
import CartItem from './CartItem'
import './ShoppingCart.css'
import { useProductContext } from './Context/ProductContext'



function ShoppingCart() {
    const [{ basket }, dispatch] = useProductContext();
    return (
        <div className="shoppingCart">
            <h1>

                Shopping Cart
            </h1>
            <div className="cart__items">
                {
                    basket.map((product) => {

                        return <CartItem product={product} key={product.item._id} />
                    })
                }

            </div>

        </div>
    )
}

export default ShoppingCart
