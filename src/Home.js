import React, { useRef, useEffect } from 'react'
import './Home.css'
import axios from "axios";
import ScrollItem from './ScrollItem';
import Services from './Services';
import Carousel from './Carousel';
import ScrollProducts from './ScrollProducts';
import Footer from './Footer';




function Home() {
    useEffect(() => {


        const options = {
            method: 'GET',
            url: 'https://amazon-data-scraper6.p.rapidapi.com/products/B08N5M7S6K',
            // params: { api_key: '79776ec62d06981ee15f865366deeb5e' },
            headers: {
                'X-RapidAPI-Host': 'amazon-data-scraper6.p.rapidapi.com',
                'X-RapidAPI-Key': 'b23e0b9bf3msh4a1bf6c90554cf5p191c86jsn2513fed5fa08'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])



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
