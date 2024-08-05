import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

//WE WILL CREATE 3 DIFFERENT FUNCTIONAL COMPONENTS EACH FOR EACH TYPE OF DEVICE

const NavSm = ()=>{
    return(
        <>
        <div className="flex items-center justify-between text-white">
            <div >
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
            </div>
            <div className="flex items-center pl-4 w-8 h-8"><IoShareSocialSharp /></div>
        </div>
        </>
    );
}

const NavLg = ()=>{
    return(
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3 w-1/2">
                <div className="w-12 h-12">
                    <img src= "https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="logo" className="w-full h-full"></img>
                </div>
                <div className=" w-full flex items-center bg-white gap-3 px-3 py-2 rounded w-1/2">
                    <BiSearch  />
                    <input type= "search" className = " w-full focus:outline-none" placeholder="Search for Movies,Events,Plays,Shows and Activities"></input>
                </div>
            </div>
            <div className="flex items-center gap-3">
            <span className="text-white text-xs flex items-center hover:font-bold cursor-pointer">Pune <IoChevronForwardOutline /></span>
            <button className="bg-red-600 text-sm text-white rounded px-2 py-1">Sign In</button>
            <button>
                <div className="w-8 h-8">
                    <IoMdMenu className="text-white w-full h-full"/> 
                </div>
            </button>
            </div>
        </div>
    )

}


const MovieNavbar = () =>{
    return(
        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 background-filter backdrop-blur-lg relative bg-navcolor-900 px-4 py-2">
            <div className="md:hidden sm:block">
            <NavSm />
            </div>
            <div className="hidden lg:hidden md:block">
            <NavSm />
            </div>
            <div className="hidden lg:flex">
            <NavLg />
            </div>
        </nav>
        </>
    )
}

export default MovieNavbar;
