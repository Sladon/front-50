import React, { useEffect, useState } from 'react';
import { GetProduct, GetImage } from '../../api';
import { useParams } from 'react-router-dom';
import './EditPrice.css';
import { useNavigate } from "react-router-dom";

const EditPrice = () => {
    const { id } = useParams();
    const [name, setName] = useState(null);
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [newprice, setNewPrice] = useState(0);
    const [newpricei, setNewPricei] = useState(0);
    const [pricestatus, SetPriceStatus] = useState(false);
    const navigate = useNavigate();

    const handleData = (data) => {
        setName(data.nombre);
        setImage(data.imagen);
        setPrice(parseInt(data.precio, 10));
    }

    const handleNewPriceChange = (event) => {
        setNewPricei(parseInt(event.target.value, 10));
      };

    const updatePrice = () => {
        setNewPrice(newpricei);
        SetPriceStatus(true);
      };

    useEffect(() => {
        if (!name){
            GetProduct(id, handleData);
        }
    })

    return(
        <div className='comp-container'>
            <div className='name-back'>
                <div className="go-back" onClick={() => navigate("/product/" + `${id}/`)}>
                    &#60;
                </div>
                <div className="product-name">
                    {name}
                </div>
            </div>
            
            <div className='image-price'>
                <div className="image-container">
                    <img className="image" alt="muffin" src={image ? GetImage(image) : "https:/media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE="} />
                </div>
            </div>

            <div className='price-newprice'>
                <div className='price2'>
                    <text>Precio actual </text>
                    ${price}
                </div>
                <div className='new-price'>
                    <input
                        className='nice-input'
                        type="tel"
                        placeholder="Nuevo precio"
                        value={newpricei}
                        onChange={handleNewPriceChange}
                    />
                    <button className='nice-button' onClick={updatePrice}>&#10003;</button>
                </div>
            </div>

            {pricestatus && (
            <div className='upgrade'>
                <text className='textpriti'> SE REGISTRO LA SOLICITUD DE CAMBIO DE PRECIO, SE VERIFICARA CON OTRAS SOLICITUDES</text>
            </div>
            )}
        </div>


    )
};

export default EditPrice;