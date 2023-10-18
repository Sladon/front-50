import React, { Component } from 'react';
import './SearchInput.css'

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            suggestions: [],
        };
    }

    handleInputChange = (e) => {
        const query = e.target.value;
        if (query.trim() !== '') {
            const suggestions = this.props.data.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            );

            this.setState({
                suggestions,
            });
        }
        else {
            const suggestions = [];
            this.setState({
                suggestions,
            });
        }
        this.setState({ query })
    };

    handleSuggestionClick = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
        });
    };

    handleSearch = () => {
        const { query, suggestions } = this.state;
        this.props.onSearch(query, suggestions);
    };

    render() {
        const { query, suggestions } = this.state;

        return (
            <div className="search-bar">
                <div className='search-input-container'>
                    <input
                        className='search-input'
                        type="text"
                        placeholder="Buscar..."
                        value={query}
                        onChange={this.handleInputChange}
                    />
                    <button className="search-btn" onClick={this.handleSearch}>
                        <img className="search-icon" src="/img/searchicon.png" alt="Search" />
                    </button>
                </div>
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => this.handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default SearchInput;