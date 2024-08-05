import React,{useEffect,useState} from "react";
import axios from "axios";
import EntertainmentCarousel from "../components/entertainment/entertainment.component.entertainmentcard";
import { Carousel } from "../components/premiere/premiere.components";
import PosterSlider from "../config/poster.components.slider";
import PremiereImages from "../config/poster.carousel.premiereimages";

function HomePage(){
    const [myMovies , setMyMovies] = useState([]);

    useEffect(()=>{
        const requestMyMovies = async() =>{
            const getImages = await axios.get("/movie/now_playing");
            setMyMovies(getImages.data.results);
            console.log(getImages);
        }
        requestMyMovies();
    },[]);

    return(
        <>
        <div className="flex flex-col gap-10">
        <div classname = "container mx-auto px-4 ">
            <h1 className="font-bold text-2xl text-gray-800">The Best of Entertainment</h1>
            <EntertainmentCarousel />
        </div>

        <div className=" bg-navcolor-200 py-16">
            
            <div className="container mx-auto px-4">
            <div className="flex">
                <img src = "https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" className="w-full h-full" alt="Rupay" />
            </div>
                <PosterSlider images = {myMovies} title ="Premiere" subtitle="Brand New Releases Every Friday" isDark/>
            </div>
        </div>
        </div>

        <div className="container mx-auto">
                <PosterSlider images ={myMovies} title = "Online Releases" />
        </div>
        </>
    )
}

export default HomePage;