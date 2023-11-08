import React, { useEffect, useState } from 'react';
import { GetStore, GetStoreProducts } from '../../api';
import { GetImage } from '../../api';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import "./Store.css"

const Store = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState(null);
    const [loc, setLoc] = useState(null);
    const [desc, setDesc] = useState(null);

    const [products, setProducts] = useState(null);

    const handleData = (data) => {
        setName(data.nombre);
        setLoc(data.ubicacion);
        setDesc(data.descripcion);
    }

    const handleProducts = (data) => {
        setProducts(data)
    }

    useEffect(() => {
        if (!name) GetStore(id, handleData);
        if (!products) GetStoreProducts(id, handleProducts)
    })

    return (
        <div className='comp-container'>

            <div className='name-back'>
                <div className="go-back" onClick={() => navigate("/stores")}>
                    &#8592;
                </div>
                <div className="product-name">
                    {name}
                </div>
                <div className="edit-icon" onClick={() => console.log("Editar")}>
                    &#9998;
                </div>
            </div>

            <div className="horizontal-line"></div>

            <div className="local">
                <span className="local-label">Ubicación</span>
                {loc}
            </div>

            <div className="description">
                <span className="local-label">Descripción</span>
                <div className='description-info'>
                    {desc}
                </div>
            </div>

            <ul className='products'>
                {products && products.map((product, index) => (
                    <li key={index}>
                        <img src={GetImage(product.imagen)} alt={product.nombre} />
                        <h3>{product.nombre}</h3>
                        <p>Location: {product.nombre_local}</p>
                        <p>Price: {product.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Store;