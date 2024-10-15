import React,{useState} from 'react';
import './Hcarousel.css';

import{
    img7, img8, img9, img10, img11, img12, img13, img14
} from '../assets';

const images = [
    img7, img8, img9, img10, img11, img12, img13, img14
];

const Hcarousel = () =>{

    const[currentIndex,setCurrentIndex] = useState(0);

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) =>
            prevIndex +4 >= images.length ? 0 :prevIndex +4
        );
    };

    const prevSlide = () =>{
        setCurrentIndex((prevIndex) =>
        prevIndex -4 < 0 ? images.length-4 :prevIndex-4
    );
    };

    return(
        <div className='carousel'>
            <button className='nav-button prev' onClick={prevSlide}>{"<"}</button>
            <div className='container1'>
                <div className='slides1'
                style={{transform: `translateX(-${currentIndex*(100/4)}%)`}}
                >
                    {images.map((image,index) =>(
                        <div className='slides2' key={index}>
                            <img src={image} alt={`Digital Experience ${index+1}` } />
                        </div>
                    ))}
    
                </div>
            </div>
            <button className='nav-button next' onClick={nextSlide}>{">"}</button>
        </div>
    );
};
export default Hcarousel;