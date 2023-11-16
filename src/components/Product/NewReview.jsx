import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReviewCreate } from '../../api';
import { useGlobalContext } from '../../context';

const NewReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userid } = useGlobalContext();

  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    ReviewCreate({ user: userid, producto: id, comentario: description, calificacion: parseInt(rating, 10) }, handleResponse);
    navigate(`/product/${id}/reviews`);
  };

  const handleResponse = (resp) => {
    if (resp.message != "Invalid credentials") {
        navigate(`/product/${id}/reviews`);
    } else {
        alert('Clasificación o descripcion incorrectas .');
        setDisplayError(resp.errors);
    }
}

  return (
    <div>
      <div className='name-back'>
        <div className='go-back' onClick={() => navigate(`/product/${id}/reviews/`)}>
          &#60;
        </div>
        <div className='product-name'>{name}</div>
      </div>

      <div>
        <label>Calificación (1-5):</label>
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
