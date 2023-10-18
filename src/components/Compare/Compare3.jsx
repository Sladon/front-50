import React from "react";
import "./Compare.css";
import { SearchItem } from "../SearchItem/SearchItem";
import Filters from "./Filters"


const Compare = () => {
    const [searchInput, setSearchInput] = React.useState("");

    const [searchFilters, setSearchFilters] = React.useState({ price: 0 });
    const [openFilters, setOpenFilters] = React.useState(false);

    const [searchResults, setSearchResults] = React.useState(null);
    const [searching, setSearching] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);

    const handleSearch = () => {
        console.log("Search for: ", searchInput, " with filters: ", searchFilters);
        setOpenFilters(false);
        setSearchResults([{
            id: 1,
            name: "Hamburguesa",
            location: "Ciencias",
            price: 100,
            img: "/img/hamburguer.png"
        },
        {
            id: 2,
            name: "Muffin",
            location: "Ciencias",
            price: 50,
            img: "/img/muffin.jpg"
        }]
        );
    }

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }



    return (
        <div className="comp-container">
            <h1 className="comp-title">Comparar</h1>
            <div className="search-bar">
                <input className="search-input" onChange={handleSearchInput} value={searchInput} type="text" placeholder="Buscar" />
                <button className="search-btn" onClick={handleSearch}>
                    <img className="search-icon" src="/img/searchicon.png" alt="Search" />
                </button>
                <button className="filter-btn" onClick={() => setOpenFilters(!openFilters)}>
                    <img className="filter-icon" src="/img/filtericon.png" alt="Filter" />
                </button>
                {openFilters && (
                    <Filters filters={searchFilters} setFilters={setSearchFilters} />
                )}
            </div>
            {searchResults ? (
                <div className="results">
                    <div className="results-header">
                        <h1 className="res-head-title">Cantidad de resultados: {searchResults.length}</h1>
                        <button className="clear-btn" onClick={() => setSearchResults(null)}>
                            Limpiar
                            <img className="clear-icon" src="/img/sweeping.png" alt="Clear" />
                        </button>
                    </div>
                    {searchResults.map((result) => {
                        return (<SearchItem key={result.id} productID={result.id} onClick={(data) => console.log("Navigate to product:", data)} name={result.name} location={result.location} price={result.price} img={result.img} />)
                    })}
                </div>) : (
                <div className="results-placeholder">
                    <img className="hamburguer-icon" src="/img/hamburguer.png" alt="Search" />
                    <h1 className="hamburguer-text">Compara y compra!</h1>
                </div>
            )
            }

        </div>
    )
}


export default Compare;