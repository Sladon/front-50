import React from 'react';
import ResultItem from './Item';
import { useNavigate } from "react-router-dom";

function ResultList({ searchResults, clearResults, ItemDetailsComponent, navigateTo }) {

    const navigate = useNavigate();

    return (
        <div className="results">
            <div className="results-header">
                <h1 className="res-head-title">Cantidad de resultados: {searchResults.length}</h1>
                <button className="clear-btn" onClick={clearResults}>
                    Limpiar
                    <img className="clear-icon" src="/img/sweeping.png" alt="Clear" />
                </button>
            </div>
            {searchResults.map((result) => (
                <ResultItem key={result.id} result={result} ItemDetailsComponent={ItemDetailsComponent} onClick={(data) => navigate(navigateTo + `/${data.id}`, { state: { id: data.id } })} />))}
        </div>
    );
}

export default ResultList;
