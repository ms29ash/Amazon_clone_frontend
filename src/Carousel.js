import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'



function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  };
  return (
    <Slider {...settings} className="slider" id="top">
      <div>

        <img className="carousel__image" src="https://m.media-amazon.com/images/I/71oIK-DJjwL._SX3000_.jpg" alt="" />
      </div>
      <div>

        <img className="carousel__image" src="https://m.media-amazon.com/images/I/61fELy6G32L._SX3000_.jpg" alt="" />
      </div>
      <div>


        <img className="carousel__image" src="https://m.media-amazon.com/images/I/71joIi9cbML._SX3000_.jpg" alt="" />
      </div>
      <div>


        <img className="carousel__image" src="https://m.media-amazon.com/images/I/61bHeh8tD5L._SX3000_.jpg" alt="" />
      </div>


    </Slider>
  )
}

export default Carousel;
