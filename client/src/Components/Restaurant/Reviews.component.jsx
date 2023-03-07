import React, { useState } from 'react'
import ReviewCard from "../Reviews/ReviewCard";
import AddReviewCard from "../Reviews/AddReviewCard";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getReview } from '../../Redux/Reducers/review/review.action';
const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const { id } = useParams()
    const dispatch = useDispatch()
    const updatedReviews = useSelector(
        (globalState) => globalState.review.reviews.reviews
    );
    useEffect(() => {
        dispatch(getReview(id)).then((data) => {
            setReviews(data.payload.reviews);
        });
    }, [])

    useEffect(() => {
        if (updatedReviews) {
            setReviews(updatedReviews);
        }
    }, [updatedReviews]);
    return (
        <div className="w-full h-full flex-col md:flex md:flex-row relative gap-5">
            <div className="w-full md:w-8/12 flex flex-col gap-3">
                <div className="md:hidden mb-4">
                    <AddReviewCard />
                </div>
                {reviews.map((review, index) => (
                    <ReviewCard {...review} key={index} />
                ))}
            </div>
            <aside
                style={{ height: "fit-content" }}
                className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white py-4 px-4 shadow-md flex-col gap-4"
            >
                <AddReviewCard />
            </aside>
        </div>
    )
}

export default Reviews