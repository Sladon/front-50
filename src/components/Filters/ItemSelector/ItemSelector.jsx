import React, { useState } from 'react';

const ItemSelector = ({ items, onSelectedItemsChange }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (item) => {
        console.log('handleItemClick called with:', item);
        const updatedSelectedItems = selectedItems.includes(item)
            ? selectedItems.filter((i) => i !== item)
            : [...selectedItems, item];

        setSelectedItems(updatedSelectedItems);
        onSelectedItemsChange(updatedSelectedItems);
    };

    return (
        <div className="item-selector">
            <div className="item-list">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${selectedItems.includes(item) ? 'selected' : ''}`}
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemSelector;
