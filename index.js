import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Index=() =>{
    return (
        <div>
            <BrowserRouter>
            <App /> 
            </BrowserRouter>
            
        </div>
    )
}
ReactDOM.render(<Index />,document.getElementById('root'));
