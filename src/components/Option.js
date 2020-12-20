import React,{useState} from 'react'

const Option = (props) =>{
    const [editText, setEditText] = useState("");
    const deleteHandler = ()=>{
        props.setOptions(props.options.filter(e1 => e1.id !== props.option.id))
        // console.log(props.option)
    }

    const editTextHandler = (e1) =>{
        setEditText(e1.target.value)
        // console.log(e1.target.value)
    }
    // console.log(props.inputText)

    const editHandler = () =>{
        props.setOptions(props.options.map((item) => {
            if(item.id === props.option.id && item.edit === false){
                return{
                    ...item, edit:true
                }
            }
            else if(item.id === props.option.id && item.edit === true){
                return{
                    ...item,text: editText, edit:false
                }
            }
            return item
        })
        );
    }
    // console.log(props.options)
    return (
        <div className="list">
            <li className="options-list" id={props.id}>{props.text}</li>
            <span>counts = {props.count}</span>
            <input onChange={editTextHandler} className={`${props.option.edit ? "edit-input-visible" : "edit-input-invisible"}`}></input>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Option