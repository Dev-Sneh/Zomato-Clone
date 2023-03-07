import React from 'react'
import DeliveryCarousel from '../Delivery/DeliveryCarousel'
import DiningCarousel from './DiningCarousel'
const Dining = () => {
    return (
        <div className="mb-10">
            <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold">
                Collections
            </h1>
            <p className='text-sm font-light mb-5 md:text-xl'>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
            </p>
            <DiningCarousel />
            <DeliveryCarousel />
        </div>
    )
}

export default Dining