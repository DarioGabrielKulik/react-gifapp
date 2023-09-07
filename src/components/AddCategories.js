import React, {useState} from 'react'



const AddCategories = ({setCategory}) => {

    const [inputValue, setinputValue] = useState("")

    const handleInputValue = (e) =>{
        setinputValue(e.target.value)
    }

    const hadleForm = (e) =>{
        e.preventDefault();
        setCategory(cat => [inputValue, ...cat]);       
    }
   
    return(
        <form onSubmit={hadleForm}>       
        <input type='text'
        value={inputValue}
        onChange={ handleInputValue}
        placeholder='Ingrese una palabra'
        />
        </form>
    )
}
export default AddCategories;