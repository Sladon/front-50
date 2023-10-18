import React from 'react';
import ResultItem from './Item';

function ResultList({ searchResults, clearResults }) {
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
                <ResultItem key={result.id} result={result} onClick={(data) => console.log("Navigate to product:", data)} />))}
        </div>
    );
}

export default ResultList;
