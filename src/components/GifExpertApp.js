import React, {useState} from "react";
import AddCategories from './AddCategories';
import GifGrid from "./GifGrid";


const GifExpertApp = () => {

    const [category, setCategory] = useState([ "dragon ball"])

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategories setCategory={setCategory}/>
        <hr />      
        <ol>
            {
            category.map( catego => {
             return <GifGrid 
             key={catego}
             category={catego}
             />
            })
            }
        </ol>
        </>
    )
}
export default GifExpertApp;