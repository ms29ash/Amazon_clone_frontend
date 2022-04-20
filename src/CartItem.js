import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <>

            <div className="cart__item">
                <img src="https://m.media-amazon.com/images/I/71H9d4Rt3rL._AC_AA180_.jpg" alt="" />
                <div className="cart__item--details">

                    <p>RawRage DECAPRO Ultimate Size Gain Formula l Helps Gain Mass- Pack of 2</p>
                    <div className="rating">
                        {
                            Array(5).fill().map((_, i) => {
                                return <p>&#11088;</p>
                            })
                        }
                    </div>

                    <div className="price">
                        <div className="discount__price">

                            <small>&#8377;</small>
                            <span>285</span>
                            <small>00</small>
                        </div>
                        <div className="actual__price">
                            <small>

                                <del>&#8377;331.00</del>
                            </small>
                        </div>
                    </div>
                    <button>Remove from Cart</button>
                </div>
            </div>
        </>
    )
}

export default CartItem
