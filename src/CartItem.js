import React from 'react'
import './CartItem.css'

function CartItem(props) {
    const { title, thumbnail, price, reviews } = props.product?.item || {}

    return (
        <>

            <div className="cart__item">
                <img src={thumbnail} alt="" />
                <div className="cart__item--details">

                    <p>{title?.length > 100 ? `${title.substring(0, 80)}...` : title}</p>
                    <div className="rating">
                        {
                            Array(Math.floor(reviews.rating)).fill().map((_, i) => {
                                return <p key={i}>&#11088;</p>
                            })
                        }
                        {
                            Array(5 - Math.floor(reviews.rating)).fill().map((_, i) => {
                                return <p className="outline-star" key={i}>&#9734;</p>

                            })
                        }
                    </div>

                    <div className="price">
                        <div className="discount__price">

                            <small>&#8377;</small>
                            <span>{price.current_price}</span>
                            <small>00</small>
                        </div>
                        <div className="actual__price">
                            <small>

                                <del>&#8377;{price.before_price}.00</del>
                            </small>
                        </div>

                    </div>

                    <select name="Qty" className="button">Qty

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) =>
                                <option value={number} selected={props.product.quantity === number} >{number}</option>
                            )
                        }

                    </select>

                </div>
            </div>
        </>
    )
}

export default CartItem
