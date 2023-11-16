import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReviewCreate, GetProduct } from '../../api';
import { useGlobalContext } from '../../context';
import './NewReview.css';

const NewReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userid } = useGlobalContext();
  const [name, setName] = useState(null);

  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [displayError, setDisplayError] = useState(null);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    ReviewCreate({ user: userid, producto: id, comentario: description, calificacion: parseInt(rating, 10) }, handleResponse);
  };

  const handleResponse = (resp) => {
    if (resp.message !== "Invalid credentials") {
        navigate(`/product/${id}/reviews`);
    } else {
        alert('Clasificación o descripcion incorrectas .');
        setDisplayError(resp.errors);
    }
  };

  useEffect(() => {
    if (!name) {
      GetProduct(id, handleData);
    }
  });

  const handleData = (data) => {
    setName(data.nombre);
  };

  return (
    <div className='new-review-container'>
      <div className='new-review-header'>
        <div className='new-review-go-back' onClick={() => navigate(`/product/${id}/reviews/`)}>
          &#60; Volver
        </div>
        <div className='new-review-product-name'>{name}</div>
      </div>

      <div className='new-review-input-container'>
        <label className='new-review-input-label'>Calificación (1-5):</label>
        <div className='new-review-rating-container'>
          {[1, 2, 3, 4, 5].map((value) => (
            <div
              key={value}
              className={`new-review-rating-star ${rating >= value ? 'active' : ''}`}
              onClick={() => setRating(value)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className='new-review-input-container'>
        <label className='new-review-input-label'>Descripción:</label>
        <textarea className='new-review-input' value={description} onChange={handleDescriptionChange} />
      </div>

      {displayError && <div className='new-review-error-message'>{displayError}</div>}

      <button className='new-review-submit-button' onClick={handleSubmit}>
        Guardar Review
      </button>
    </div>
  );
};

export default NewReview;
