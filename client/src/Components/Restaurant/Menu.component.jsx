import React, { useEffect, useState } from 'react'
import MenuCollection from './MenuCollection';
import { useDispatch, useSelector } from "react-redux";
import getImage from "../../Redux/Reducers/image/image.action";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const dispatch = useDispatch();
    const reduxState = useSelector(
        (globalState) => globalState.restaurant.selectedRestaurant
    );
    //   console.log("MEnucomp", reduxState);
    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState.menuImage)).then((data) => {
                const images = [];
                data.payload.images?.map(({ location }) => images.push(location));
                setMenu(images);
            });
        }
    }, [reduxState]);
    return (
        <div className="flex flex-wrap gap-3">
            <MenuCollection menuTitle="Menu" pages={menu.length} images={menu} />
        </div>

    )
}

export default Menu