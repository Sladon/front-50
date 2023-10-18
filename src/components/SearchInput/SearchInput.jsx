import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const query = e.target.value;
        setQuery(query);

        if (query.trim() !== '') {
            const filteredSuggestions = props.data.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    const handleSearch = () => {
        props.onSearch(query, suggestions);
    };

    return (
        <div>
            <div className='search-input-container'>
                <input
                    className='search-input'
                    type="text"
                    placeholder="Buscar..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="search-btn" onClick={handleSearch}>
                    <img className="search-icon" src="/img/searchicon.png" alt="Search" />
                </button>
            </div>
            <ul className="suggestions">
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchInput;
