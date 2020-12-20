import React,{useState} from 'react'
import Form from './Form';
import OptionList from './OptionList'

function Admin({inputText,setInputText,options,setOptions}) {
    // const [admin,showAdmin] = useState(false)
    // const showAdminPanel = ()=>{
    //     showAdmin("true")
    // }
    
    return (
        <div>
            {/* <button className={`admin-btn ${admin ? "edit-input-invisible" : "edit-input-visible"}`} onClick={showAdminPanel}>Admin sign in</button> */}
            <div 
            // className={`${admin ? "edit-input-visible" : "edit-input-invisible"}`}
            >
                <h1 className="admin-head">Hey Admin, here's your Data</h1>
                <Form
                inputText={inputText}
                options={options}
                setOptions={setOptions}
                setInputText={setInputText}
                ></Form>

                <OptionList
                setInputText={setInputText}
                setOptions={setOptions}
                options={options}
                ></OptionList>
            </div>
        </div>
    )
}

export default Admin
