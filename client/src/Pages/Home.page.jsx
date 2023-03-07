import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
//components
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';
import HomeLayout from '../Layouts/Homepage.layout'
import { getRestaurant } from "../Redux/Reducers/restaurant/restaurant.action";

const Home = () => {
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    }, []);

    return (
        <>
            <div className="my-5 mb-20 md:mb-10">
                {type === "delivery" && <Delivery />}
                {type === "dining" && <Dining />}
                {type === "night" && <NightLife />}
                {type === "nutrition" && <Nutrition />}
            </div>
        </>
    )
}

export default HomeLayout(Home);