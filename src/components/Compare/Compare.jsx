import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Compare.css'

const Compare = () => {
    const [dataFromSearchBar, setDataFromSearchBar] = useState([]);

    const handleDataFromSearchBar = (data) => {
        console.log(data)
        setDataFromSearchBar(data);
    }

    return (
        <div>
            <h1>Compare Items</h1>
            <SearchBar onDataFromSearchBar={handleDataFromSearchBar} />
            <div className="selected-products">
                {(dataFromSearchBar.length > 0) ? (
                    <ul>
                        {dataFromSearchBar.map((item, index) => (
                            <li key={index}>{item.nombre} - {item.nombre_local}</li>
                        ))}
                    </ul>
                ) : (
                    <div className="results-placeholder">
                        <img className="hamburguer-icon" src="/img/hamburguer.png" alt="Search" />
                        <h1 className="hamburguer-text">Compara y compra!</h1>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Compare;
