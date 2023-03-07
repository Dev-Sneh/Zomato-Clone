// redux
import { GET_REVIEW, POST_REVIEW } from "./review.type";
import axios from "axios";


export const getReview = (resId) => async (dispatch) => {
    try {
        const reviewList = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/review/${resId}`,
        });
        // console.log("getting reviews", reviewList.data)
        return dispatch({ type: GET_REVIEW, payload: reviewList.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const postReview = (reviewData) => async (dispatch) => {
    try {
        //console.log("REVIEWACTIOMMM", reviewData)
        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/review/new`,
            data: { reviewData },
        });

        return dispatch({ type: POST_REVIEW, payload: reviewData });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};