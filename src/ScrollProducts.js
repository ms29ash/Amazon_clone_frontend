import React, { useRef } from 'react'
import './ScrollProduct.css'
import ScrollItem from './ScrollItem';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useQuery } from 'react-query'

import axios from './axios'



function ScrollProducts(props) {
    const { pageNo } = props || {}
    const scrollRef = useRef();
    console.log(pageNo)


    const fetchProduct = (pageNo) => {
        return axios.get(`/product/?page=${pageNo}`)
    }


    const { data, isSuccess, error, isFetching, refetch } = useQuery(['product', pageNo], () => fetchProduct(pageNo), {
        keepPreviousData: true
    })

    return (
        <div className="scroll__items"  >

            <h3>Today's Deals</h3>
            <AiFillCaretLeft onClick={() => scrollRef.current.scrollLeft -= 800} className=" arrow left__arrow" />
            <AiFillCaretRight onClick={() => { scrollRef.current.scrollLeft += 800 }} className=" arrow right__arrow" />
            <div className="scrollItem__container" ref={scrollRef}>


                {
                    isSuccess && data?.data.product.map((item) => {

                        return <ScrollItem item={item} key={item._id} />
                    })
                }


            </div>
        </div>
    )
}

export default ScrollProducts
