import React from 'react'
import logo from "./Assets/FoodFiesta_Logo.png"
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="nav">
                <img className="brand-logo" src={logo} alt="FoodFiesta_Logo" />
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/menu">Menu</Link></li> */}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar