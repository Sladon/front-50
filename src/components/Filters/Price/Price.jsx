import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Price.css';

const PriceSlider = ({ minPrice, maxPrice, selectedPrice, onPriceChange }) => {
    const [price, setPrice] = useState(selectedPrice);

    const handlePriceChange = (value) => {
        setPrice(value);
        onPriceChange(value);
    };

    return (
        <div className="price-slider">
            <div className="price-range">
                <div className="label">Precio:</div>
                <div className="value">${price}</div>
            </div>
            <Slider
                min={minPrice}
                max={maxPrice}
                step={10}
                value={price}
                onChange={handlePriceChange}
            />
        </div>
    );
};

export default PriceSlider;
