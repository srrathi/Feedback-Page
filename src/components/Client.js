import React from 'react'


const Client =(props)=>{
    const counterIncrement = ()=>{
        props.setOptions(props.options.map((item) => {
            if(item.id === props.option.id && item.selected === false){
                return{
                    ...item,selected:true, count:item.count+1
                    
                }
            }
            else{
                return{
                    ...item,selected:true
                }
            }
        })
        )
    }
    
    return (
        <div>
            <ul className={`${props.option.selected ? "edit-input-invisible" : "edit-input-visible"}`}>
                <li onClick={counterIncrement} key={props.id}>{props.text}</li>
            </ul>
        </div>
    )
}

export default Client