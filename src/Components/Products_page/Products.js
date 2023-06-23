import React from 'react'
import { CardGroup, Container } from "reactstrap"
import Cards from '../Card/Cards'
import './Products.css'

import rehabilition_aids from '../../img/product/rehabilition_aids.jpg'
import autoclaves_sterilisers from '../../img/product/autoclaves & sterilisers.jpg'
import icu_electrical_manual_beds from '../../img/product/icu_electrical_manual_beds.png'
import laryngoscopy from '../../img/product/laryngoscopy.jpg'
import electric_baby_warmer from '../../img/product/electric-baby-warmer.jpg'
import operation_theatre_table from '../../img/product/operation_theatre_table.jpg'
import surgical_Led_Lights from '../../img/product/surgical_Led_Lights.jpg'
import delivery_beds from '../../img/product/delivery_beds.jpg'
import anaesthesia_machine_accessories from '../../img/product/anaesthesia_machine_accessories.jpg'
import hospital_holloware from '../../img/product/hospital_holloware.jpg'
import ambulance_strecher from '../../img/product/ambulance_strecher.jpg'
import baby_tray_with_cover from '../../img/product/baby_tray_with_cover.jpg'
import dressing_drum from '../../img/product/dessing_drum.jpg'
import flow_meter_eco_range from '../../img/product/flow_meter_eco_range.jpg'
import kidney_tray from '../../img/product/kidney_trey.jpg'
import x_ray_view_box from '../../img/product/x-ray_view_box.jpg'
import suction_machine from '../../img/product/suction_machine.jpg'
import hygrometer from '../../img/product/hygrometer.jpg'
import icu_beds_fowler_beds from '../../img/product/icu_beds_fowler_beds.jpg'
import semi_fowler_plain_bed from '../../img/product/semi_fowler_plain_bed.jpg'
import ot_halogen_lights from '../../img/product/ot_halogen_lights.jpg'
import sethoscope from '../../img/product/sethoscope.jpg'
import baby_bed from '../../img/product/baby_bed.jpg'
import pulse_oximeter from '../../img/product/pulse_oximeter.jpg'


const Products = () => {
  return (
    <div className='pb-2 product_bg'>
      <Container className='py-4 '>
        <CardGroup className='gap-4 text-center py-4'>
          <Cards img_alt='rehabilition aids' img_src={rehabilition_aids} title='REHABILITION AIDS' />
          <Cards img_alt='autoclaves sterilisers' img_src={autoclaves_sterilisers} title='AUTOCLAVE & STERLIZERS' />
          <Cards img_alt='icu electrical & manual_beds ' img_src={icu_electrical_manual_beds} title='ICU ELECTRICAL & MANUAL BEDS' ></Cards>
        </CardGroup>

        <CardGroup className='gap-4 text-center py-4'>
          <Cards img_alt='LARYNGOSCOPY' img_src={laryngoscopy} title='LARYNGOSCOPY' ></Cards>
          <Cards img_alt='electric_baby_warmer' img_src={electric_baby_warmer} title='ELECTRIC BABY WARMER' />
          <Cards img_alt='operation_theatre_table' img_src={operation_theatre_table} title='Operation Theatre Table' />
        </CardGroup>

        <CardGroup className="gap-4 text-center py-4">
          <Cards img_alt='surgical Led Lights' img_src={surgical_Led_Lights} title='Surgical Led Lights' />
          <Cards img_alt='delivery beds' img_src={delivery_beds} title='Delivery Beds' />
          <Cards img_alt='anaesthesia machine & accessories' img_src={anaesthesia_machine_accessories} title='ANAESTHESIA MACHINE & ACCESSORIES' />
        </CardGroup>

        <CardGroup className="gap-4 text-center py-4">
          <Cards img_alt='HOSPITAL HOLLOWARE' img_src={hospital_holloware} title='HOSPITAL HOLLOWARE' />
          <Cards img_alt='AMBULANCE STRECHER' img_src={ambulance_strecher} title='AMBULANCE STRECHER' />
          <Cards img_alt='baby_tray_with_cover' img_src={baby_tray_with_cover} title='BABY TRAY WITH COVER' />
        </CardGroup>

        <CardGroup className="gap-4 text-center py-4">
          <Cards img_alt='DRESSING DRUM' img_src={dressing_drum} title='DRESSING DRUM' />
          <Cards img_alt='FLOW METER ECO RANGE' img_src={flow_meter_eco_range} title='FLOW METER ECO RANGE' />
          <Cards img_alt='KIDNEY TREY' img_src={kidney_tray} title='KIDNEY TREY' />
        </CardGroup>

        <CardGroup className="gap-4 text-center py-4">
          <Cards img_alt='X-RAY VIEW BOX' img_src={x_ray_view_box} title='X-RAY VIEW BOX' />
          <Cards img_alt='SUCTION MACHINNE' img_src={suction_machine} title='SUCTION MACHINNE' />
          <Cards img_alt='HYGROMETER' img_src={hygrometer} title='HYGROMETER' />
        </CardGroup>

        <CardGroup className="gap-4 text-center py-4">
          <Cards img_alt='ICU BEDS & FOWLER BEDS' img_src={icu_beds_fowler_beds} title='ICU BEDS & FOWLER BEDS' />
          <Cards img_alt='SEMI FOWLER BED & PLAIN BED' img_src={semi_fowler_plain_bed} title='SEMI FOWLER BED & PLAIN BED' />
          <Cards img_alt='O.T HALOGEN LIGHTS' img_src={ot_halogen_lights} title='O.T HALOGEN LIGHTS' />
        </CardGroup>

        <CardGroup className="gap-4 text-center py-4">
          <Cards img_alt='baby_bed' img_src={baby_bed} title='BABY BED' />
          <Cards img_alt='Sethoscope' img_src={sethoscope} title='SETHOSCOPE' />
          <Cards img_alt='Pulse Oximeter' img_src={pulse_oximeter} title='Pulse Oximeter' />
        </CardGroup>

      </Container>
    </div >
  )
}

export default Products