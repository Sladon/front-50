import React from 'react';
import "./Item.css"

function ResultItem({ result, onClick }) {
    return (
        <div className="search-item">
            <div className="vertical-flex">
                <img className="google-image" alt="muffin" src={null} />
                <div className="horizontal-flex">
                    <h1 className="item-name">{result.nombre}</h1>
                    <h3 className="item-location">{result.local_name}</h3>
                    <div className="vertical-separator">
                        <h3 className="price-tag">${result.precio}</h3>
                        <button onClick={() => onClick(result)} className="custom-button">Ver</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultItem;
