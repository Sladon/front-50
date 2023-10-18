import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Compare.css'

const Compare = () => {
    const [dataFromSearchBar, setDataFromSearchBar] = useState([]);

    const handleDataFromSearchBar = (data) => {
        setDataFromSearchBar(data);
    }

    return (
        <div>
            <h1>Compare Items</h1>
            <SearchBar onDataFromSearchBar={handleDataFromSearchBar} />
            <div className="selected-products">
                <ul>
                    {dataFromSearchBar.map((item, index) => (
                        <li key={index}>{item.nombre} - {item.nombre_local}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default Compare;
