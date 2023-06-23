import React from 'react'
import Cards from '../Card/Cards'
import { CardGroup, Button } from 'reactstrap'

import rehabilition_aids from '../../img/product/rehabilition_aids.jpg'
import autoclaves_sterilisers from '../../img/product/autoclaves & sterilisers.jpg'
import icu_electrical_manual_beds from '../../img/product/icu_electrical_manual_beds.png'
import laryngoscopy from '../../img/product/laryngoscopy.jpg'
import electric_baby_warmer from '../../img/product/electric-baby-warmer.jpg'
import operation_theatre_table from '../../img/product/operation_theatre_table.jpg'
import surgical_Led_Lights from '../../img/product/surgical_Led_Lights.jpg'
import delivery_beds from '../../img/product/delivery_beds.jpg'

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='heroSection'>
                <div className='container'>
                    <div className='heroSection_welcome'>
                        <h1 className='hero_section_text'>WELCOME TO <br></br>ARYA HEALTHCARE</h1>
                    </div>
                    <div className='hero_section_text'>
                        <p >
                            WHY CHOOSE US
                        </p>
                        <p className='why_choose_us'>
                            We import and distribute quality medical equipment and surgical instruments.
                        </p>
                    </div>
                </div>
            </div >

            <div className='py-4 bg_herosection'>
                < div className='container text-center' >
                    <h1 className='HeroSection_Heading'> Arya Healthcare Product Range</h1 >
                    <p className='HeroSection_SubHeading'>Search & view our wide range of medical equipment & supplies.</p>
                    <hr />
                </div >
                <div className="container p_grid " >
                    <CardGroup className='gap-4 text-center py-4'>
                        <Cards img_alt='rehabilition aids' img_src={rehabilition_aids} title='REHABILITION AIDS' />
                        <Cards img_alt='autoclaves sterilisers' img_src={autoclaves_sterilisers} title='AUTOCLAVE & STERLIZERS' />
                        <Cards img_alt='icu electrical & manual_beds ' img_src={icu_electrical_manual_beds} title='ICU ELECTRICAL & MANUAL BEDS' ></Cards>
                        <Cards img_alt='LARYNGOSCOPY' img_src={laryngoscopy} title='LARYNGOSCOPY' ></Cards>
                    </CardGroup>

                    <CardGroup className='gap-4 text-center'>
                        <Cards img_alt='electric_baby_warmer' img_src={electric_baby_warmer} title='ELECTRIC BABY WARMER' />
                        <Cards img_alt='operation_theatre_table' img_src={operation_theatre_table} title='Operation Theatre Table' />
                        <Cards img_alt='surgical Led Lights' img_src={surgical_Led_Lights} title='Surgical Led Lights' />
                        <Cards img_alt='delivery beds' img_src={delivery_beds} title='Delivery Beds' />
                    </CardGroup>
                </div>
                <div className='py-5 d-flex justify-content-center' >
                    <Button
                        color="primary"
                        href="/Products"
                        tag="a"
                    >
                        View All Products
                    </Button>
                </div>
            </div >

        </div>

    )
}

export default Home