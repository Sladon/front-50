import React, { useState, useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FilterBox from '../Filters/FilterBox/FilterBox';
import './SearchBar.css';

const SearchBar = (props) => {
    const [products, setProducts] = useState([]);
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [searchedProducts, setSearch] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        tags: [],
        locations: [],
    });
    const [suggestions, setSuggestions] = useState([]);
    const [toggleFilters, setToggleFilters] = useState(false);

    const { enableFilter = true } = props;

    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
    }

    const handleData = (data) => {
        setProducts(data);
        const prices = data.map(item => Math.trunc(parseFloat(item.precio)));
        const maxP = Math.max(...prices);
        const minP = Math.min(...prices);
        setMaxPrice(maxP);
        setMinPrice(minP);
        setSuggestions(data.map(item => item.nombre));
        if (enableFilter) {
            setFilterOptions(prevOptions => ({
                ...prevOptions,
                locations: [...new Set(data.map(item => item.nombre_local))],
                tags: [...new Set(data.map(item => item.tags.map(tag => tag.nombre)))].flat().filter(onlyUnique),
            }));
        };
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
            && (tags.length === 0 || tags.some(tag => product.tags.map(ptag => ptag.nombre.toLowerCase()).includes(tag.toLowerCase())))
        );
        props.onDataFromSearchBar(filteredProducts);
    };

    return (
        <div className="search-bar">
            <SearchInput data={suggestions} onSearch={handleSearch} showSuggestions={!toggleFilters} />
            <button className="filter-btn" onClick={() => {
                setToggleFilters(!toggleFilters);
            }}>
                {enableFilter && <img className="filter-icon" src="/img/filtericon.png" alt="Filter" />}
            </button>
            {enableFilter && toggleFilters && (
                <FilterBox
                    tags={filterOptions.tags}
                    locations={filterOptions.locations}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onFilter={handleFilter}
                />
            )}
        </div>
    );
}

export default SearchBar;
