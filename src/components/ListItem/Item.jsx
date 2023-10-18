import React from 'react';

function ResultItem({ result, onClick }) {
    return (
        <div className="result-item">
            <SearchItem
                key={result.id}
                productID={result.id}
                onClick={() => onClick(result)}
                name={result.nombre}
                location={result.local_name}
                price={result.precio}
                img={null}
            />
        </div>
    );
}

export default ResultItem;
