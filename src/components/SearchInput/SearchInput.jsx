import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    function filterSuggestions(value) {
        if (value.trim() !== '') {
            const filteredSuggestions = props.data.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }

    const handleInputChange = (e) => {
        const query = e.target.value;
        filterSuggestions(query);
        setQuery(query);
    };

    const handleSearch = (value) => {
        props.onSearch(value);
        setQuery(value)
        filterSuggestions(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(query);
        }
    };

    return (
        <>
            <input
                className="search-input"
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            {props.showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSearch(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SearchInput;
