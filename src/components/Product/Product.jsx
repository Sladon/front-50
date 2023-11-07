import React, { useEffect, useState } from 'react';
import { GetProduct, GetImage } from '../../api';
import { useParams } from 'react-router-dom';
import './Product.css';
import { useNavigate } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    const [name, setName] = useState(null);
    const [local, setLocal] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [review, setReview] = useState(4);
    const [tags, setTags] = useState("");
    const navigate = useNavigate();


    const handleData = (data) => {
        setName(data.nombre);
        setLocal(data.nombre_local);
        setDescription(data.descripcion);
        setPrice(data.precio);
        setImage(data.imagen);
        setTags(data.tags);
    }

    useEffect(() => {
        if (!name){
            GetProduct(id, handleData);
        }
    })


    return (
        <div className='comp-container'>

            <div className='name-back'>
                <div className="go-back" onClick={() => navigate("/compare")}>
                    &#8592;
                </div>
                <div className="product-name">
                    {name}
                </div>
                <div className="edit-icon" onClick={() => console.log("Editar")}>
                    &#9998; 
                </div>
            </div>

            <div className='image-price'>
                <div className="image-container">
                    <img className="image" alt="muffin" src={image ? GetImage(image) : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE="} />
                </div>
                <div className="price-review">
                    <div className="price">
                        $ {price}
                    </div>
                    <div className="review">
                        <div className="stars">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span
                                    key={index}
                                    className={`star ${index + 1 <= review ? 'filled' : ''}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="horizontal-line"></div>
            
            <div className="local">
                <span className="local-label">Local</span>
                {local}
            </div>

            <div className="description">
                <span className="local-label">Descripción</span>
                <div className='description-info'>
                    {description}
                </div>
            </div>
            
            <div className="tags">
                <span className="local-label">Tags</span>
                <div className="tags-info">
                    {Array.isArray(tags) && tags.length > 0 ? (
                        tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag.nombre}
                            </span>
                        ))
                    ) : (
                        <span>No hay tags disponibles</span>
                    )}
                </div>
            </div>

        </div>

    );
};

export default Product;