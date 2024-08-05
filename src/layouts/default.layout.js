import React from "react";

//Import Components
import Navbar from "../components/navbar/navbar.component"
import HeroCarousel from "../components/hero carousel/herocarousel.component";

const DefaultLayout = (props) => {
    return(
        <>
        <Navbar />
        <HeroCarousel />
        {props.children}
        </>
    )
}

export default DefaultLayout;