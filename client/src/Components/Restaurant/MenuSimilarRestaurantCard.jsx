import React from 'react'
import { TiStar } from "react-icons/ti";
const MenuSimilarRestaurantCard = (props) => {
    return (
        <div className="mx-2 my-2">
            <div className="bg-white shadow-xl rounded-md">
                <div className="w-full h-48 md:h-44">
                    <img
                        src={props.image}
                        alt={props.title}
                        className="w-full h-full object-cover rounded-t-md md:object-center"
                    />
                </div>
                <div className="flex flex-col gap-2 p-3">
                    <h3 className="font-semibold text-lg">{props.title}</h3>
                    <div className="flex items-center justify-start text-sm gap-4">
                        {props.ratingDining <= 3.5 ? (
                            <span className="flex lg:flex-row items-center justify-between text-sm gap-2 md:text-sm md:flex-col">
                                <span className="flex text-sm items-center gap-1 bg-red-700 text-white px-2 py-1 rounded">
                                    {props.ratingDining} <TiStar />
                                </span>
                                Dining
                            </span>
                        ) : (
                            <span className="flex lg:flex-row items-center justify-between text-sm gap-2 md:text-sm md:flex-col">
                                <span className="flex text-sm items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">
                                    {props.ratingDining} <TiStar />
                                </span>
                                Dining
                            </span>
                        )
                        }
                        {props.ratingDelivery <= 3.5 ? (
                            <span className="flex lg:flex-row items-center justify-between text-sm gap-2 md:text-sm md:flex-col">
                                <span className="flex text-sm items-center gap-1 bg-red-700 text-white px-2 py-1 rounded">
                                    {props.ratingDelivery} <TiStar />
                                </span>
                                Delivery
                            </span>
                        ) : (
                            <span className="flex lg:flex-row items-center justify-between text-sm gap-2 md:text-sm md:flex-col">
                                <span className="flex text-sm items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">
                                    {props.ratingDelivery} <TiStar />
                                </span>
                                Delivery
                            </span>
                        )
                        }
                    </div>
                    <h4 className='mt-2'>Street Food, Benerages, Tea</h4>
                </div>
            </div>
        </div>
    )
}

export default MenuSimilarRestaurantCard