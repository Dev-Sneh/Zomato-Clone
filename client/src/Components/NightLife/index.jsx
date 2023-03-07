import React from 'react'
import DeliveryCarousel from '../Delivery/DeliveryCarousel'
import NightLifeCarousel from './NightLifeCarousel'

const NightLife = () => {
    return (
        <div className="mb-10">
            <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold">
                Nightlife Restaurant in Mumbai
            </h1>
            <p className='text-sm mt-1 font-light mb-6 md:text-xl'>
                Groove to the rhythm of Mumbai's vibrant nightlife with spots made for moments after sundown.
            </p>
            <NightLifeCarousel />
            <DeliveryCarousel />
        </div>
    )
}

export default NightLife