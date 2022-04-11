import React, { useRef } from 'react'
import './ScrollProduct.css'
import ScrollItem from './ScrollItem';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";



function ScrollProducts() {
    const scrollRef = useRef();
    return (
        <div className="scroll__items"  >

            <h3>Today's Deals</h3>
            <AiFillCaretLeft onClick={() => scrollRef.current.scrollLeft -= 800} className=" arrow left__arrow" />
            <AiFillCaretRight onClick={() => { scrollRef.current.scrollLeft += 800 }} className=" arrow right__arrow" />
            <div className="scrollItem__container" ref={scrollRef}>
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
            </div>
        </div>
    )
}

export default ScrollProducts
