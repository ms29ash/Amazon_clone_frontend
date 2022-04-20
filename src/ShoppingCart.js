import React from 'react'
import CartItem from './CartItem'
import './ShoppingCart.css'

function ShoppingCart() {
    return (
        <div className="shoppingCart">
            <h1>

                Shopping Cart
            </h1>
            <div className="cart__items">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

        </div>
    )
}

export default ShoppingCart
