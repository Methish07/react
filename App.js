import React from 'react'
import {Switch,Route} from 'react-router-dom';
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import './index.css'
import Info from './info'
import Component from './component'
function App() {
    return (
        <div>
            
            <Navbar />
            
            <Switch>
           <div className="bg-color"> 
            <Route path="/"  exact>
                    <Info />
                    <br></br>
                    <br></br>
                    <Component /> 
                </Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/cart" >
                <h1>your cart</h1>
                </Route>
                
                </div>
            </Switch>
            
        </div>
    )
}

export default App
