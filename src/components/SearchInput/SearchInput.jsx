import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const query = e.target.value;
        setQuery(query);

        if (query.trim() !== '') {
            const filteredSuggestions = props.data.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearch = () => {
        props.onSearch(query);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <div>
            <div className="search-input-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Buscar..."
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {props.showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSearch(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
