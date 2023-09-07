export const ApiGif = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=djEEO5y22a7JFdD1GXksYOaLUOGzARSF&q=${ encodeURI(category) }&limit=100` 
    const respuesta = await fetch(url);
    const {data}= await respuesta.json();

    const gif = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })  
    return gif;  
}