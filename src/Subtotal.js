import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { basketAmount } from './Context/reducer'
import { useProductContext } from './Context/ProductContext'



function Subtotal() {
    const [{ basket }, dispatch] = useProductContext();
    return (
        <div className="subtotal__container">

            <div className="subtotal">
                <div className="subtotal__head">

                    Subtotal ({basket?.length} items)
                    <CurrencyFormat value={1000} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} renderText={(value) => (

                        <strong>{value}</strong>
                    )} />
                </div>
                <div className="subtotal__price">
                </div>
                <div className="gift">
                    <input type="checkbox" name="gift" id='gift' />
                    <small>   This order contains a gift</small>
                </div>
                <button className="proceed__btn">Proceed to Buy</button>
            </div>
        </div>
    )
}

export default Subtotal
