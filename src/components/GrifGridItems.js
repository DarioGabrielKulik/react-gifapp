import React from "react";

const GrifGridItems = ( { url, title} ) =>{

    console.log({url, title})

    return(

        <div className="card animate__animated animate__zoomInDown ">       
        <img   src={url} alt={title}/>
        <h1>{title}</h1>        
        </div>

    )
}

export default GrifGridItems;