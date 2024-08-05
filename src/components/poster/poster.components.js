import React from "react";

//props has 5 sub properties:
//src , alt , title , subtitle , isDark(bool)

const Poster = (props) =>{
    return(
        <>
            <div className="flex flex-col gap-2 items-start px-2">
                <div className="h-80 ">
                    <img className="w-full h-full rounded-xl" src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}  alt = {props.alt}/>
                </div>
                <div>
                    <h3 className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-900"}`}>
                        {props.original_title}
                    </h3>
                    <p className={`text-lg  ${props.isDark ? "text-gray-100":"text-gray-500"}`}>{props.subtitle}</p>
                </div>
            </div>
        
        
        
        </>




    )

}

export default Poster;