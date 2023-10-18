import React from "react";
import "./SearchItem.css";

export const SearchItem = (props) => {
    return (
        <div className="search-item">
            <div className="vertical-flex">
                <img className="google-image" alt="muffin" src={props.img} />
                <div className="horizontal-flex">
                    <h1 className="item-name">{props.name}</h1>
                    <h3 className="item-location">{props.location}</h3>
                    <div className="vertical-separator">
                        <h3 className="price-tag">${props.price}</h3>
                        <button onClick={() => props.onClick(props.productID)} className="custom-button">Ver</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
