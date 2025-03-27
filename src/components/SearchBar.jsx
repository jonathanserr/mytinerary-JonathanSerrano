import React from 'react';
 import { FaSearchLocation } from "react-icons/fa";

function SearchBar({ searchText, handleChangeText }) {
    return (
        <div className="flex gap-1 mt-20 justify-center my-6">
            <input
                className="border-2 min-w-80 border-red-800 rounded-lg ps-2 sm:h-9"
                type="search"
                placeholder="Search by city..."
                value={searchText}
                onChange={(e) => handleChangeText(e.target.value)}
                required=""
            />
            <FaSearchLocation className="text-3xl text-cian-800" />
        </div>
    );
};

export default SearchBar;