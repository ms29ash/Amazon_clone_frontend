import React, { useRef } from 'react'
import './Home.css'


import ScrollItem from './ScrollItem';
import Services from './Services';
import Carousel from './Carousel';
import ScrollProducts from './ScrollProducts';
import Footer from './Footer';




function Home() {



    return (
        <div className="home">
            <Carousel />
            <Services />
            <ScrollProducts />
            <ScrollProducts />

            <div className="ads">
                <img className="ads__img" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
            </div>
            <Footer />

        </div>
    )
}

export default Home
