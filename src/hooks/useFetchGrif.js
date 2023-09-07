import { useEffect, useState } from "react"
import { ApiGif } from './../helpers/ApiGif';


export const useFetchGrif = (category) => {
 
    const [state, setstate] = useState({
        data: [],
        loding: true
    });

   useEffect(()=>{
       ApiGif(category)
            .then( imgs => {                            
                    setstate({
                        data: imgs,
                        loding: false
                    })
                
            })
    },[category])
return state;
}


