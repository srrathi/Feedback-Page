import React,{useState} from 'react'
import Form from './Form';
import OptionList from './OptionList'

function Admin({
    admin,
    inputText,
    setInputText,
    options,
    setOptions,
    showAdminPanel}) {
    
    return (
        <div>
            <button key = "2" className = {`admin-btn ${admin ? "edit-input-invisible" : "edit-input-visible"}`} onClick = {showAdminPanel}>Admin sign in</button>
            <div className = {`admin-div ${admin ? "edit-input-visible" : "edit-input-invisible"}`} onClick = {showAdminPanel}>
            
            
                <Form
                inputText = {inputText}
                options = {options}
                setOptions = {setOptions}
                setInputText = {setInputText}
                ></Form>

                <h3>Reasons Available</h3>
                <OptionList
                setInputText = {setInputText}
                setOptions = {setOptions}
                options = {options}
                ></OptionList>
            </div>
        </div>
    )
}

export default Admin
