import React, { useEffect, useState } from 'react';
import { GetProduct} from '../../api';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NewReview = () => {
    const { id } = useParams();
    const [name, setName] = useState(null);
    const [reviewi, setReviewi] = useState(null);
    const [review, setReview] = useState(null);
    const [reviewdi, setReviewdi] = useState(null);
    const [reviewd, setRevied] = useState(null);
    const [reviewtatus, SetReviewStatus] = useState(false);
    const navigate = useNavigate();

    const handleData = (data) => {
        setName(data.nombre);
    }

    useEffect(() => {
        if (!name){
            GetProduct(id, handleData);
        }
    })

    const handleNewReview = (event) => {
        setReviewi(parseInt(event.target.value, 10));
      };

    const updatePrice = () => {
        setReview(reviewi);
        SetReviewStatus(true);
      };



    return(
        <div>
            <div className='name-back'>
                <div className="go-back" onClick={() => navigate("/product/" + `${id}/reviews/`)}>
                    &#60;
                </div>
                <div className="product-name">
                    {name}
                </div>
            </div>

            <div className='new-review'>
                <input
                    className='inputr'
                    type="tel"
                    placeholder="Clasificaion 0 a 5"
                    value={reviewi}
                    onChange={handleNewReview}
                />
                <input
                    className='inputrd'
                    type="string"
                    placeholder="Descripcion"
                    value={reviewi}
                    onChange={handleNewReview}
                />
                <button className='nice-button2' onClick={updatePrice}>&#10003;</button>
            </div>




        </div>

    )
};

export default NewReview;