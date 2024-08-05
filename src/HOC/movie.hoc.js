//HOC STANDS FOR HIGHER ORDER COMPONENT
//IT TRANSFERS ONE COMPONENT TO ANOTHER COMPONENT AND HELPS IN CREATING THE UI
//IT ADDS ADDITIONAL FUNCTIONALITIES TO THE EXISTING COMPONENT

import React from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/movie.layout";

const MovieHOC = ({tempFunction: HomePage, ...rest }) => {

    return (
      <MovieLayout>
        <HomePage  {...rest}/>
      </MovieLayout>
    );
};

export default MovieHOC;
