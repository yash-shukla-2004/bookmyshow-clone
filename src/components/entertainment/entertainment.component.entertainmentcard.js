import React from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return(
        <>
        <div className="px-4 w-full h-30">
            <img className="w-full h-full rounded-xl" src={props.src} alt="Entertainment Card Image"/>
        </div>
        </>
    )
};

const EntertainmentCarousel = () => {
    const images = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/ipl-2024-web-collection-202403130643.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/kids-zone-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MzArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/adventure-fun-collection-202211140440.png"
    ];

    const settings = {
        infinite: true,
        slidesToScroll: 3,
        slidesToShow: 5,
        autoplay: false,
        initialSlide: 0
    };

    return(
        <>
        <Slider {...settings}>
           {
            images.map((image)=>(
                <EntertainmentCard src = {image} />
            ))
           }
        </Slider>
        </>
    );
};

export default EntertainmentCarousel;