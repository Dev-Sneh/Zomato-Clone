// redux type
import { GET_IMAGE } from "./image.type";
import axios from "axios";
export const getImage = (_id) => async (dispatch) => {
    try {
        const image = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/image/${_id}`,
        });
        // console.log("imageeaction", image)
        return dispatch({ type: GET_IMAGE, payload: image.data.image });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export default getImage;