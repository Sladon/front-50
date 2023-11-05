import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultList from '../ListItem/ListItem';
import StoresItemDetails from './StoresItemDetails';
import { GetStores } from '../../api';
import './Stores.css'
import './StoreResults.css'

const Stores = () => {
    const [dataFromSearchBar, setDataFromSearchBar] = useState([]);

    const handleDataFromSearchBar = (data) => {
        setDataFromSearchBar(data);
    }

    const clearResults = () => {
        setDataFromSearchBar([]);
    }


    return (
        <div className='comp-container'>
            <h1 className='comp-title'>Comparar</h1>
            <SearchBar onDataFromSearchBar={handleDataFromSearchBar} getApiCall={GetStores} />
            {(dataFromSearchBar.length > 0) ? (
                <ResultList searchResults={dataFromSearchBar} clearResults={clearResults} ItemDetailsComponent={StoresItemDetails} />
            ) : (
                <div className="results-placeholder">
                    <h1 className="hamburguer-text">Tiendas</h1>
                </div>
            )}
        </div>

    );
};

export default Stores;