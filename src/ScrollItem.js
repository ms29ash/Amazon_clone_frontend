import React from 'react'
import { Link } from 'react-router-dom'
import './ScrollItem.css'
import { ProContext } from './Context/ProductContext'

function ScrollItem() {
    const [{ basket }, dispatch] = ProContext();
    const name = 'tag8 DOLPHIN Smart Padlock (Silver) with Bluetooth enabled Anti-Theft and Anti- Lost Lock for Luggage, Bags, Locker, Bicycle Unlock via Phone App - TSA Approved - Location Tracking | Switch to Smart Now';
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                name: name,
            }
        })
    }
    return (


        <div className="scrollItem__wrapper">
            <img src="https://m.media-amazon.com/images/I/516NOoe8efL._SS460_.jpg" alt="" />
            {/* <Link to='/'>{name.length > 100 ? `${name.substring(0, 80)}...` : name}</Link> */}
            <Link to='/' className="name">{name}</Link>
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
            <button onClick={addToCart}>Add to Cart</button>
        </div>

    )
}

export default ScrollItem
