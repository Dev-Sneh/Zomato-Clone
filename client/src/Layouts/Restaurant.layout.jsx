import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
//icons
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
// components
import Navbar from "../Components/Navbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import InfoButton from "../Components/Restaurant/InfoButton";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import Tabs from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";
import { getSpecificRestaurant } from '../Redux/Reducers/restaurant/restaurant.action';
import { getImage } from '../Redux/Reducers/image/image.action';
import { useDispatch } from 'react-redux';

const RestaurantLayout = ({ children: Component, ...props }) => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        images: [],
        cuisine: [],
        address: "",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
    });

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            setRestaurant((prev) => ({
                ...prev,
                ...data.payload,
            }));
            dispatch(getImage(data.payload.photos)).then((data) => {
                setRestaurant((prev) => ({
                    ...prev,
                    images: data.payload.images,
                }));
            });
        });
    }, []);
    useEffect(() => {

    })

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
                <ImageGrid images={restaurant.images} />
                <RestaurantInfo {...restaurant} />
                <div className="my-4 flex flex-wrap gap-3 mx-auto">
                    <InfoButton isActive="true">
                        <TiStarOutline /> Add Review
                    </InfoButton>
                    <InfoButton>
                        <RiDirectionLine /> Direction
                    </InfoButton>
                    <InfoButton>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButton>
                    <InfoButton>
                        <RiShareForwardLine /> Share
                    </InfoButton>
                </div>
                <div className="my-10">
                    <Tabs />
                </div>
                {Component}
            </div>
            <CartContainer />
        </>
    );
};

export default RestaurantLayout;


// images: [
//     {
//         location:
//             "https://b.zmtcdn.com/data/pictures/chains/8/301718/9386449fd71cc10c9b1007469be4fe10.jpg",
//     },
//     {
//         location:
//             "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
//     },
//     {
//         location:
//             "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
//     },
//     {
//         location:
//             "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
//     },
//     {
//         location:
//             "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
//     },
// ],
// name: "Biryani Blues",
// cuisine: ["Biryani", "Kebab", "Desserts"],
// address: "Connaught Place, New Delhi",
// restaurantRating: 4.1,
// deliveryRating: 3.2,