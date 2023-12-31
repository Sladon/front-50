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
        <div className='comp-container1'>
            <h1 className='comp-title'>Tiendas</h1>
            <SearchBar onDataFromSearchBar={handleDataFromSearchBar} enableFilter={false} getApiCall={GetStores} />
            {(dataFromSearchBar.length > 0) && (
                <ResultList searchResults={dataFromSearchBar} clearResults={clearResults} ItemDetailsComponent={StoresItemDetails} navigateTo={"/store"} />
            )}
        </div>

    );
};

export default Stores;