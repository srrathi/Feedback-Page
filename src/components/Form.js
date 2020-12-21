import React, {useState} from 'react'

const Form = ({inputText, options, setInputText, setOptions}) =>{
    //Functions
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const[optn,setOptn] = useState(options)
    const submitOptionHandler = (e) => {
        e.preventDefault();
        console.log(options)

        setOptions([
            ...options,
            {text: inputText,
                edit:false, 
                selected: false, 
                count: 0, 
                id: optn.length}
        ])
        
        setInputText("");
        setOptn(options)
    }

    return(
        <form className = "main-form">
            <input className = "form-input" value = {inputText} onChange = {inputTextHandler} type = "text" placeholder = "Add new option"></input>
            <button className = "add-btn" onClick = {submitOptionHandler} type = "submit">Add new</button>
        </form>
    )
}

export default Form