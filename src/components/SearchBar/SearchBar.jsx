import React, { useState, useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FilterBox from '../Filters/FilterBox/FilterBox';
import { GetProducts } from "../../api";
import './SearchBar.css';

const SearchBar = (props) => {
    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearch] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
        locations: [],
    });
    const [suggestions, setSuggestions] = useState([]);
    const [toggleFilters, setToggleFilters] = useState(false);

    const handleData = (data) => {
        setProducts(data);
        setSuggestions(data.map(item => item.nombre));
        setFilterOptions(prevOptions => ({
            ...prevOptions,
            locations: [...new Set(data.map(item => item.nombre_local))],
        }));
    }

    useEffect(() => {
        props.getApiCall(handleData);
    }, []);

    const handleSearch = (query) => {
        setToggleFilters(false);
        const search = products
            .filter(item => item.nombre.toLowerCase().includes(query.toLowerCase()))
            .map(item => item);
        setSearch(search);
        props.onDataFromSearchBar(search);
    };

    const handleFilter = (filters) => {
        const { price, locals, tags } = filters;
        const toFilter = searchedProducts.length > 0 ? searchedProducts : products;
        const filteredProducts = toFilter.filter((product) =>
            (locals.length === 0 || locals.includes(product.nombre_local))
            && (price === 0 || parseFloat(product.precio) <= price)
            // && (tags.length === 0 || tags.some(tag => product.nombre.toLowerCase().includes(tag.toLowerCase)))
        );
        props.onDataFromSearchBar(filteredProducts);
    };

    return (
        <div className="search-bar">
            <SearchInput data={suggestions} onSearch={handleSearch} showSuggestions={!toggleFilters} />
            <button className="filter-btn" onClick={() => {
                setToggleFilters(!toggleFilters);
            }}>
                <img className="filter-icon" src="/img/filtericon.png" alt="Filter" />
            </button>
            {toggleFilters && (
                <FilterBox
                    tags={filterOptions.tags}
                    locations={filterOptions.locations}
                    onFilter={handleFilter}
                />
            )}
        </div>
    );
}

export default SearchBar;
