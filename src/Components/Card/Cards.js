import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import './Cards.css'


const Cards = ({ img_alt, img_src, title }) => {
    return (
        <Card className='card rounded '>
            <CardImg alt={img_alt} src={img_src} />
            <CardBody>
                <CardTitle tag="h5" className='product_titile' >{title}</CardTitle>
            </CardBody>
        </Card>
    )
}

export default Cards