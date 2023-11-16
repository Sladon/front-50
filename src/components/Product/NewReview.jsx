import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NewReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {

    console.log('Enviar a la API:', { rating, description });

    navigate(`/product/${id}/reviews`);
  };

  return (
    <div>
      <div className='name-back'>
        <div className='go-back' onClick={() => navigate(`/product/${id}/reviews/`)}>
          &#60;
        </div>
        <div className='product-name'>{name}</div>
      </div>

      <div>
        <label>Clasificación (1-5):</label>
        <input type='number' min='1' max='5' value={rating} onChange={handleRatingChange} />
      </div>

      <div>
        <label>Descripción:</label>
        <textarea value={description} onChange={handleDescriptionChange} />
      </div>

      <button onClick={handleSubmit}>Guardar Review</button>
    </div>
  );
};

export default NewReview;
