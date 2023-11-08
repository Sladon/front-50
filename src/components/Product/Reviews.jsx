import React, { useEffect, useState } from 'react';
import { GetReviews } from '../../api';
import { useParams } from 'react-router-dom';
import './Reviews.css';
import { useNavigate } from "react-router-dom";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState("");

    const handleData = (data) => {
        setReviews(data);
    }

    useEffect(() => {
        GetReviews(id, handleData);
    })

    return(
        <h1></h1>
    )
};

export default Reviews;