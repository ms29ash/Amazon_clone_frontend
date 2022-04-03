import React from 'react'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from './ServiceCard';



function Home() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true
    };
    return (
        <div className="home">
            <Slider {...settings} className="slider" >
                <div>

                    <img className="carousel__image" src="https://m.media-amazon.com/images/I/71oIK-DJjwL._SX3000_.jpg" alt="" />
                </div>
                <div>

                    <img className="carousel__image" src="https://m.media-amazon.com/images/I/61fELy6G32L._SX3000_.jpg" alt="" />
                </div>
                <div>


                    <img className="carousel__image" src="https://m.media-amazon.com/images/I/71joIi9cbML._SX3000_.jpg" alt="" />
                </div>


            </Slider>
            <div className="service__cards">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                {/* <ServiceCard />
                <ServiceCard />
                <ServiceCard /> */}
            </div>

        </div>
    )
}

export default Home
