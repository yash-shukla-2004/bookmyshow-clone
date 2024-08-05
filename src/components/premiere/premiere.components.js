import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Poster from "../poster/poster.components";

import settings from "../../config/poster.carousel.settings";
import PremiereImages from "../../config/poster.carousel.premiereimages";

import {NextArrow ,PrevArrow} from "../hero carousel/herocarousel.component.arrows"

export const Carousel = (props) =>{
    

    

    
    return(
        <>
        <div className="flex flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premieres</h3>
            <p className="text-sm font-bold">Brand New Releases Every Friday</p>
        </div>
        <Slider {...settings}>
            {PremiereImages.map((image)=>(
                <Poster {...image} isDark />
            ))}
        </Slider>
        </>
    )
            }