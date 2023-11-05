import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultList from '../ListItem/ListItem';
import ProductDetails from './ProductDetails';
import { GetProducts } from '../../api';
import './Compare.css'
import './ProductResults.css'

const Compare = () => {
    const [dataFromSearchBar, setDataFromSearchBar] = useState([]);

    const handleDataFromSearchBar = (data) => {
        setDataFromSearchBar(data);
    }

    const clearResults = () => {
        setDataFromSearchBar([]); // Clear the search results by setting it to an empty array
    }


    return (
        <div className='comp-container'>
            <h1 className='comp-title'>Comparar</h1>
            <SearchBar onDataFromSearchBar={handleDataFromSearchBar} getApiCall={GetProducts} />
            {(dataFromSearchBar.length > 0) ? (
                <ResultList searchResults={dataFromSearchBar} clearResults={clearResults} ItemDetailsComponent={ProductDetails} navigateTo={"/product"} />
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
