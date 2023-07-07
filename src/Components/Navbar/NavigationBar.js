import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import logo from "../../img/logo_arya_healthcare.png"
import './Navbar.css'


function NavigationBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="lg" container {...args}>
                <NavbarBrand href="/"><img src={logo} alt='logo_img' style={{ height: "80px", opacity: "1" }} /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="me-auto navbar-collapse justify-content-end" navbar >
                        <NavItem>
                            <NavLink className="nav-link " to={"/"}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to={"/about"}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to={"/contact"}>Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;