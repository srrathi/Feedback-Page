import React, {useState} from 'react'
import './App.css';
import Admin from './components/Admin';
import Nav from './components/Nav';
import Client from './components/Client'

function App() {

  const [inputText, setInputText] = useState("");
  const [admin,showAdmin] = useState(false)
  const [feed,showFeed] = useState(false)

  const [options, setOptions] = useState([
    {
      "text": "Product is Expensive",
      "count": 12,
      "selected": false,
      "edit":false,
      "id": 0
    },
    {
      "text": "Product is Complicated",
      "count": 13,
      "selected": false,
      "edit":false,
      "id": 1
    },
    {
      "text": "I was just browsing the Product",
      "count": 14,
      "selected": false,
      "edit":false,
      "id": 2
    },
    {
      "text": "Not interested",
      "count": 15,
      "selected": false,
      "edit":false,
      "id": 3
    }
  ]);

  const showAdminPanel = ()=> {
    if(!admin){
      showAdmin(true)
      showFeed(true)
    }
    
  }

  return (
    <div className = "App">
      <Nav></Nav>
          <Admin
            admin = {admin}
            showAdmin = {showAdmin}
            inputText = {inputText}
            setInputText = {setInputText}
            options = {options}
            setOptions = {setOptions}
            showAdminPanel = {showAdminPanel}
            />

          <div>
          <button key = "1" className = {`feedback-btn ${admin ? "edit-input-visible" : "edit-input-invisible"}`} onClick = {showAdminPanel}>Feedback Page</button>
            <div className = {`feedback ${admin ? "edit-input-invisible" : "edit-input-visible"}`} onClick = {showAdminPanel}>
            <h3>Feedback Page</h3>
          <h5>Please select any one option from below to give your feedback</h5>
          {options.map((option,index) => {

              return (<div><Client
              option = {option}
              count = {option.count}
              id = {index}
              setOptions = {setOptions}
              options = {options}
              text = {option.text}
              key = {option.id}
              setInputText = {setInputText}
              /></div>)
            })}</div>

            </div>
    </div>
  );
}

export default App;
