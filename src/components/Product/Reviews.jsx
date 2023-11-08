import React, { useEffect, useState } from 'react';
import { GetReviews } from '../../api';
import { useParams } from 'react-router-dom';
import './Reviews.css';
import { useNavigate } from "react-router-dom";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState("");

    const handleData = (data) => {
        console.log(id)
    }

    useEffect(() => {
        GetReviews(id, handleData);
    })

    return (
        <h1>asd</h1>
    )
};

export default Reviews;