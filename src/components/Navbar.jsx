import React from 'react'
// const Logo_Url = "./Assets/FoodFiesta_Logo.png"
import logo from "./Assets/FoodFiesta_Logo.png"
function Navbar() {
    return (
        <>
            <div className="nav">
                <img className="brand-logo" src={logo} alt="FoodFiesta_Logo" />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar