import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { SiBookmyshow } from "react-icons/si";

function MoviePage(){
    return(
        <>
            <MovieHero />
            <div className="container mx-auto py-10 lg:ml-48 lg:w-1/2 ">
                <div className="flex flex-col items-start gap-3">
                    <h3 className="font-bold text-2xl text-gray-800">About the Movie</h3>
                    
                    
                    <p>Po faces his greatest challenge yet when he ventures to the big city and meets a new villain called the Chameleon.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div>
                    <h3 className="font-bold text-2xl text-gray-800">Applicable Offers</h3>
                </div>
                <div className="flex gap-4 items-center my-4 w-1/2  bg-yellow-100 border-yellow-500 border-2 rounded-lg border-dashed px-4">
                <div>
                    <SiBookmyshow />

                </div>
                <div className="flex flex-col items-start">
                    <h5>Filmy Pass</h5>
                    <p>Get 75% on 3 movies you buy/rent on Stream. Buy Filmy Pass @99</p>
                </div>
                </div>
            </div>

            
        </>
    )
}

export default MoviePage;