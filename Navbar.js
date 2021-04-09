import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <div className="fluid">
            <Link to="/login"><h2 className="log-heading">Login</h2></Link>
            
            <Link to="/"><img className="header-img"src="https://www.weareconvoy.com/wp-content/uploads/2014/04/Foodify-slide-1.jpg"></img></Link>
    
    <Link to ="/cart"><h1 className="cart-img"><strong>&#128722;</strong></h1></Link>
    <Link to="/about"><h2 className="abt-heading">About us</h2></Link> 
    </div>
        </div>
    )
}

export default Navbar
