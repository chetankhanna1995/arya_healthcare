import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from "../../img/logo_arya_healthcare.png"



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand bg-body-tertiary " style={{ backgroundColor: "#ffffff" }}>
                <div className="container w-100">
                    <a className="navbar-brand p-0" href="/#"><img src={logo} alt='logo_img' style={{ height: "80px", opacity: "1" }} />
                    </a>
                    <div className="collapse navbar-collapse justify-content-end" >
                        <ul className="navbar-nav text-center">
                            <li className="nav-item ">
                                <NavLink className="nav-link " to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/about"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contact"}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar