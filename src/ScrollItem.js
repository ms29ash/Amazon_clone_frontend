import React from 'react'
import { Link } from 'react-router-dom'
import './ScrollItem.css'
import { useProductContext } from './Context/ProductContext'

function ScrollItem(props) {
    const [{ basket }, dispatch] = useProductContext();
    const { title, thumbnail, price, } = props.item || {};
    // const name = 'tag8 DOLPHIN Smart Padlock (Silver) with Bluetooth enabled Anti-Theft and Anti- Lost Lock for Luggage, Bags, Locker, Bicycle Unlock via Phone App - TSA Approved - Location Tracking | Switch to Smart Now';
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item: {
                    name: title,
                },
                quantity: 1
            }
        })
        console.log(title)
    }
    return (


        <div className="scrollItem__wrapper">
            {/* <img src="https://m.media-amazon.com/images/I/516NOoe8efL._SS460_.jpg" alt="" /> */}
            <img src={thumbnail} alt="" />
            {/* <Link to='/'>{name.length > 100 ? `${name.substring(0, 80)}...` : name}</Link> */}
            <Link to='/' className="name">{title}</Link>
            <div className="rating">
                {
                    Array(5).fill().map((_, i) => {
                        return <p key={i}>&#11088;</p>
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
