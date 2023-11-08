import React, { useState } from 'react';
import PriceSlider from '../Price/Price';
import ItemSelector from '../../ItemSelector/ItemSelector';
import './FilterBox.css';

const FilterBox = ({ tags, locations, minPrice, maxPrice, onFilter }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(maxPrice);

    const handleSelectedTags = (selectedTags) => {
        setSelectedTags(selectedTags);
        onFilter({ price: selectedPrice, locals: selectedLocations, tags: selectedTags })
    };

    const handleSelectedLocations = (selectedLocations) => {
        setSelectedLocations(selectedLocations);
        onFilter({ price: selectedPrice, locals: selectedLocations, tags: selectedTags })
    };

    const handleSelectedPrice = (selectedPrice) => {
        setSelectedPrice(selectedPrice);
        onFilter({ price: selectedPrice, locals: selectedLocations, tags: selectedTags })
    };

    return (
        <div className="filters-container">
            <h1 className="filters-title">Filtra tu busqueda!</h1>
            <PriceSlider
                minPrice={minPrice}
                maxPrice={maxPrice}
                selectedPrice={selectedPrice}
                onPriceChange={handleSelectedPrice}
            />
            <h1 className="ubicacion-title">Ubicacion:</h1>
            <div className="ubicacion-container">
                <ItemSelector items={locations} onSelectedItemsChange={handleSelectedLocations} />
            </div>
            <h1 className="tag-title">Tags:</h1>
            <div className="tag-container">
                <ItemSelector items={tags} onSelectedItemsChange={handleSelectedTags} />
            </div>
        </div>
    );
};

export default FilterBox;