//HOC STANDS FOR HIGHER ORDER COMPONENT
//IT TRANSFERS ONE COMPONENT TO ANOTHER COMPONENT AND HELPS IN CREATING THE UI
//IT ADDS ADDITIONAL FUNCTIONALITIES TO THE EXISTING COMPONENT

import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC = ({tempFunction: HomePage, ...rest }) => {

    return (
      <DefaultLayout>
        <HomePage  {...rest}/>
      </DefaultLayout>
    );
};

export default DefaultHOC;

