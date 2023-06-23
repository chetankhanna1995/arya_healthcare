import React from 'react'
import about_image from '../../img/medical.jpg'

import './About.css'


const About = () => {
    return (
        <div >
            <img src={about_image} alt='logo' className='about_image' />
            <div className='container text-center py-5 about_text'>
                <h1 className='text-uppercase text-center py-2'>About Us</h1>
                <p className='text-capitalize text-dark '>
                    Our medical products bridge the gap between the constant need for quality and the increasing demand for savings. <br>
                    </br>Our Arya Healthcare brand portfolio is a comprehensive oﬀering of clinician-preference, cost-efficient products,
                    and physician- preferred items with low clinical differentiation, helping providers improve the bottom line while
                    delivering high- quality care. Because we work from the acute channel to the home, we’re uniquely positioned to
                    stay ahead, ﬁnding product efficiencies that move care forward.
                </p>
            </div>

        </div>


    )
}

export default About    