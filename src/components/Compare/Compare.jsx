import React, { useState, useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FilterBox from '../Filters/FilterBox/FilterBox';
import './Compare.css'

const Compare = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearch] = useState([])
    const [filterOptions, setFilterOptions] = useState({
        tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
        locations: [],
    });
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/productos/")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProducts(data);
                setSuggestions(data.map(item => item.nombre));
                setFilterOptions(prevOptions => ({
                    ...prevOptions,
                    locations: [...new Set(data.map(item => item.local))],
                }));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleSearch = (query) => {
        const search = products
            .filter(item => item.nombre.toLowerCase().includes(query.toLowerCase()))
            .map(item => item);
        setSelectedItems(search);
        setSearch(search);
    };

    const handleFilter = (filters) => {
        const { price, locals, tags } = filters;
        const toFilter = searchedProducts.length > 0 ? searchedProducts : products;
        const filteredProducts = toFilter.filter((product) =>
            (locals.length === 0 || locals.includes(product.local))
            && (price === 0 || parseFloat(product.precio) <= price)
            // && (tags.length === 0 || tags.some(tag => product.nombre.toLowerCase().includes(tag.toLowerCase)))
        );
        setSelectedItems(filteredProducts);
    };

    return (
        <div className="compare">
            <h1>Compare Items</h1>
            <SearchInput data={suggestions} onSearch={handleSearch} />
            <FilterBox
                tags={filterOptions.tags}
                locations={filterOptions.locations}
                onFilter={handleFilter}
            />
            <div className="selected-products">
                <h2>Selected Products:</h2>
                <ul>
                    {selectedItems.map((item, index) => (
                        <li key={index}>{item.nombre} - {item.local}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Compare;
