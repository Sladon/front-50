import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultList from '../ListItem/ListItem';
import './Compare.css'

const Compare = () => {
    const [dataFromSearchBar, setDataFromSearchBar] = useState([]);

    const handleDataFromSearchBar = (data) => {
        console.log(data)
        setDataFromSearchBar(data);
    }

    const clearResults = () => {
        setDataFromSearchBar([]); // Clear the search results by setting it to an empty array
    }


    return (
        <div className='comp-container'>
            <h1 className='comp-title'>Comparar</h1>
            <SearchBar onDataFromSearchBar={handleDataFromSearchBar} />
            {(dataFromSearchBar.length > 0) ? (
                <ResultList searchResults={dataFromSearchBar} clearResults={clearResults} />
            ) : (
                <div className="results-placeholder">
                    <img className="hamburguer-icon" src="/img/hamburguer.png" alt="Search" />
                    <h1 className="hamburguer-text">Compara y compra!</h1>
                </div>
            )}
        </div>

    );
};

export default Compare;
