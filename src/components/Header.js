import React from 'react'
import logo from '../images/logo.svg'



const Header = () => {

    return(

        <div className="top-header">

            <header>
                <img className="logo"src={logo} />
                <li>Home</li>
                <li>Language</li>
                <li>Login</li>
                <li>Register</li>
            </header>

        </div>
    )
}

export default Header