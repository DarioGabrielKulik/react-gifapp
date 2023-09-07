import React from "react";
import { useFetchGrif } from "../hooks/useFetchGrif";
import GrifGridItems from "./GrifGridItems";




const GifGrid = ({category})=>{

    const {data} =  useFetchGrif(category);

    return (
        <>
        <h3>{category}</h3>      
            {
                data.map( img =>(
                <GrifGridItems 
                key={img.id}
                {...img}/>
                 ))
            }        
        </>
    )
}
export default GifGrid;