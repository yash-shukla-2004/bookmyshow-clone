import React from "react";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import settings from "./poster.carousel.settings";
import Poster from "../components/poster/poster.components";


const PosterSlider = (props) =>{
    return(
        <>
        <div className="flex flex-col items-start py-4">
            <h3 className={`text-xl font-bold ${props.isDark ? "text-white":"text-gray-900"}`}>{props.title}</h3>
            <p className={`text-sm font-bold ${props.isDark ? "text-gray-900":"text-gray-300"}`}>{props.subtitle}</p>
        </div>
        <Slider {...settings}>
            {props.images.map((image)=>(
                <Poster {...image} isDark={props.isDark} />
            ))}
        </Slider>
        </>
    )
}

export default PosterSlider;