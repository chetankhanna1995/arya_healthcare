import React from 'react'
import './Footer.css'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='text-center' >
            <div className="p-3 text-white" >
                Copyright &copy; {currentYear} All Rights Reserved by Arya Health Care.
            </div>
        </footer>

    )
}

export default Footer