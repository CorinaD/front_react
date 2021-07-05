import React from "react";
import {Redirect} from "react-router-dom";

function MainPage({authorised})  {   
    if(!authorised)
        return <Redirect to="/sign-in" />

    return ( 
        <h3>Sall nenea</h3>
    );
        
}

export default MainPage;