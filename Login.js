import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function Login() {
    return (
        <div className="but">
            <br></br>
            <div className="login">
            <div className="mail">
                <h3>e-mail</h3>
              <input type="mail" placeholder="Enter your mail id"></input>
              <br></br>
            </div>
            <br></br>
            <br></br>
            <div className="password">
                <h3>password</h3>
                <input type="password" placeholder="Enter your password"></input>
            </div>
            <br></br>
            </div>
            <button type="submit" className="btn btn-primary but">Login</button>
        </div>
    )
}

export default Login
