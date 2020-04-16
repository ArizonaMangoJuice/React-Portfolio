import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import './Pricing.css'

const Pricing = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className=''>
            <h1>Pricing</h1>
            <div className='grids'>
                <div data-aos='fade-up' className='boxes'>1</div>
                <div className='boxes'>2</div>
                <div className='boxes'>3</div>
                <div data-aos='fade-up' className='boxes'>4</div>
                <div data-aos='fade-right'className='boxes'>5</div>
                <div className='boxes'>1</div>
                <div className='boxes'>1</div>
                <div className='boxes'>1</div>

            </div>
        </div>
    )
}

export default Pricing