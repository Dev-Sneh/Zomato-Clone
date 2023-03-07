import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const CheckoutNavbar = () => {
    const [user] = useState({
        fullName: "Shiva Kanchi",
    });

    const navigate = useNavigate();

    return (
        <>
            <nav className="p-4 flex bg-white shadow-md w-full items-center">
                <div className="container px-4 md:px-20 mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <AiOutlineArrowLeft
                            className="cursor-pointer"
                            onClick={() => navigate(-1)}
                        />
                        <div className="w-28 lg:ml-36">
                            <Link to={"/"}>
                                <img
                                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                    alt="logo"
                                    className="w-full h-full"
                                />
                            </Link>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <div className="border border-gray-300 text-zomato-400 w-12 h-12 rounded-full overflow-hidden">
                                <img
                                    src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                                    alt="Avatar"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            {user.fullName}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default CheckoutNavbar;