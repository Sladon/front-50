import React from 'react';
import "./Item.css"

function ResultItem({ result, ItemDetailsComponent, onClick }) {
    return (
        <div className="search-item">
            <div className="vertical-flex">
                <ItemDetailsComponent result={result} onClick={onClick} />
            </div>
        </div>
    );
}

export default ResultItem;