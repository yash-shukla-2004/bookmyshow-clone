import React, {useState , useEffect} from "react";
import HeroSlider from "react-slick";

//import arrow functionalities
import {NextArrow , PrevArrow} from "./herocarousel.component.arrows.js";

//import axios
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HeroCarousel = () =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "200px",
        autoplay:true,
        arrow:true,
        nextArrow: <NextArrow style = "margin-right:300px" />,
        prevArrow: <PrevArrow />
      };

        const [images,setImages] = useState([]);

        useEffect(() => {
            const requestPopularMovies = async() => {
                const getImages = await axios.get("/movie/popular");
                console.log(getImages);
                setImages(getImages.data.results);
            }
            requestPopularMovies();
        }, []);


      var settingsLg = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        centerMode: true,
        autoplay:true,
        arrow:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

      /*const images = ["https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];*/


      return(
        <>

        <div className="lg:hidden">
            <HeroSlider {...settings} >
                {
                    images.map((image)=>(
                        <div className="w-full h-44 md:h-80  py-3">
                            <img src= {`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md " ></img>
                        </div>
                    ))

                }
            </HeroSlider>

        </div>

        <div className="hidden lg:block">
            <HeroSlider {...settingsLg} >
                {
                    images.map((image)=>(
                        <div className="w-40 h-96 px-2 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full" ></img>
                        </div>
                    ))

                }
            </HeroSlider>
            
        </div>
        </>
      )
}

export default HeroCarousel;