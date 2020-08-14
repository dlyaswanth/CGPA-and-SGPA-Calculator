import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <nav>
            <div className = "nav-wrapper #b39ddb deep-purple lighten-4">
                <Link to= "/">Home</Link>
                <ul id = "nav-mobile" className = "right" >
                <li><Link to = "/cgpa"> CGPA </Link></li>
                <li><Link to = "/sgpa"> SGPA </Link></li>
                </ul>  
            </div > 
        </nav>
    )
}
export default NavBar;