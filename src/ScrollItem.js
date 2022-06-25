import React from 'react'
import { Link } from 'react-router-dom'
import './ScrollItem.css'
import { useProductContext } from './Context/ProductContext'

function ScrollItem(props) {
    const [{ basket }, dispatch] = useProductContext();
    const { title, thumbnail, price, reviews } = props.item || {};

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item: props.item,
                quantity: 1
            }
        })
        console.log(title)
    }
    return (


        <div className="scrollItem__wrapper">
            {/* <img src="https://m.media-amazon.com/images/I/516NOoe8efL._SS460_.jpg" alt="" /> */}
            <img className="item__img" src={thumbnail} alt="" />

            <Link to='/' className="name">{title.length > 100 ? `${title.substring(0, 80)}...` : title}</Link>
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

                        <del>&#8377;{price.before_price}</del>
                    </small>
                </div>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>

    )
}

export default ScrollItem
