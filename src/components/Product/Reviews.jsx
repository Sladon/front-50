import React, { useEffect, useState } from 'react';
import { GetReviews, GetProduct  } from '../../api';
import { useParams } from 'react-router-dom';
import './Reviews.css';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../context';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(null);
    const [name, setName] = useState(null);
    const navigate = useNavigate();
    const { islogged } = useGlobalContext();

    const handleData1 = (data) => {
        setReviews(data)
    }

    const handleData = (data) => {
        setName(data.nombre)
    }

    useEffect(() => {
        if (!reviews){
            GetReviews(id, handleData1);
        }
    })

    useEffect(() => {
        if (!name){
            GetProduct(id, handleData);
        }
    })

    return (
        <div className='reviewspage'>
            <div className='name-back'>
                <div className="go-back" onClick={() => navigate("/product/" + `${id}/`)}>
                    &#60;
                </div>
                <div className="product-name">
                    {name}
                </div>
            </div>

            <div className="reviews-info">
                {Array.isArray(reviews) && reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div className='review'> 
                            <div className='user-stars'>
                                <div className='user'> 
                                    {review.username}
                                </div>
                                <div className="stars">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <span
                                            key={index}
                                            className={`star ${index + 1 <= review.calificacion ? 'filled' : ''}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='comment'>
                                {review.comentario}
                            </div>
                            <div className="horizontal-line"></div>
                        </div>

                    ))
                ) : (
                    <span>No hay reseñas disponibles</span>
                )}
            </div>
            
            {islogged ? (
                <div className='add-review-div'>
                    <button className='button-review' onClick={() => navigate("add_review")}>
                    Agrega Review
                    </button>
                </div>
                ) : (
                <div className='add-review-div'>
                    <p className='p-review'>* Para agregar reviews, inicia sesión. *</p>
                    <button className='button-review'  onClick={() => navigate("/login")}>Iniciar Sesión</button>
                </div>
            )}

        </div>
    )
};

export default Reviews;