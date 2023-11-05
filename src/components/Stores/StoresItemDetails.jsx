import React from 'react';
import { GetImage } from '../../api';
import "./StoresItemDetails.css";

function StoresItemDetails({ result, onClick }) {
    return (
        <>
            <img className="google-image" alt="muffin" src={result.imagen ? GetImage(result.imagen) : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=6&m=1138179183&s=612x612&w=0&h=prMYPP9mLRNpTp3XIykjeJJ8oCZRhb2iez6vKs8a8eE="} />
            <div className="horizontal-flex">
                <h1 className="item-name">{result.nombre}</h1>
                <h3 className="item-location">{result.ubicacion}</h3>
                <div className="vertical-separator">
                    <button onClick={() => onClick(result)} className="custom-button">Ver</button>
                </div>
            </div>
        </>
    );
}

export default StoresItemDetails;