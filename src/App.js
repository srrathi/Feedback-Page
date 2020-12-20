import React, {useState} from 'react'
import './App.css';
import Admin from './components/Admin';
import Home from './components/Home';
import Nav from './components/Nav';
import Client from './components/Client'
import UserHeader from './components/UserHeader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [inputText, setInputText] = useState("");
  const [options, setOptions] = useState([]);
  
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/dashboard" component={()=>
          (
            <Admin
            inputText={inputText}
            setInputText={setInputText}
            options={options}
            setOptions={setOptions}
            ></Admin>
          )}></Route>
          <Route path="/feedback" component={()=>(
            options.map((option) =>{
              return (<div><Client
              option={option}
              count={option.count}
              id={option.id}
              setOptions={setOptions}
              options={options}
              text={option.text}
              key={option.id}
              setInputText={setInputText}
              ></Client></div>)
            })
          )}></Route>
        </Switch>
        
        {/* <Admin
        inputText={inputText}
        setInputText={setInputText}
        options={options}
        setOptions={setOptions}
        ></Admin>

        
        {options.map((option) =>{
          return (<div><Client
          option={option}
          count={option.count}
          id={option.id}
          setOptions={setOptions}
          options={options}
          text={option.text}
          key={option.id}
          setInputText={setInputText}
          ></Client></div>)
        })} */}
        </Router>
    </div>
  );
}

export default App;
