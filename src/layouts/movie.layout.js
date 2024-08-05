import React from "react";

//Import Components

import MovieNavbar from "../components/navbar/navbar.component.movie";

const MovieLayout = (props) => {
    return(
        <>
        <MovieNavbar />
        {props.children}
        </>
    )
}

export default MovieLayout;