import React, { useState } from 'react';
import PriceSlider from '../Price/Price';
import ItemSelector from '../ItemSelector/ItemSelector';
import './FilterBox.css';

const FilterBox = ({ tags, locations, onFilter }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(0);

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
        <div className="combined-filter">
            <h1>Filtra tu búsqueda!</h1>
            <PriceSlider
                minPrice={0}
                maxPrice={1000}
                selectedPrice={selectedPrice}
                onPriceChange={handleSelectedPrice}
            />

            <div className='location'>
                <h2>Locations</h2>
                <ItemSelector items={locations} onSelectedItemsChange={handleSelectedLocations} />
            </div>

            <div className='tag'>
                <h2>Tags</h2>
                <ItemSelector items={tags} onSelectedItemsChange={handleSelectedTags} />
            </div>
        </div>
    );
};

export default FilterBox;