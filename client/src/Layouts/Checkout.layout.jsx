import React from 'react'
import CheckoutNavbar from '../Components/Navbar/CheckoutNavbar';

const CheckoutLayout = (Component) => ({ ...props }) => {
    return (
        <>
            <CheckoutNavbar />
            <div className='container mx-auto px-4 lg:px-20'>
                <Component {...props} />
            </div>
        </>
    )
}

export default CheckoutLayout