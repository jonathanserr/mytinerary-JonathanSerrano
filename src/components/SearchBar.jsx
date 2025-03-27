const cities = [
    "BANGKOK",
    "PARIS",
    "DUBAI",
    "SINGAPORE",
    "KUALA LUMPUR",
    "NEW YORK",
    "MADRID",
    "TOKYO",
    "SYDNEY",
    "LONDON",
    "BARCELONA",
    "ROME",
    "RIO DE JANEIRO",
    "CAPE TOWN",
    "TORONTO"
];

function SearchBar({ searchText, handleChangeText }) {

    const filteredCities = cities.filter((city) =>
        city.toLowerCase().startsWith(searchText.toLowerCase())
    );

    return (
        <div className="flex gap-1 justify-center my-6">
            <input
                className="border-2 min-w-80 border-red-800 rounded-lg ps-2 sm:h-9"
                type="search"
                placeholder="Search by city..."
                value={searchText}
                onChange={(e) => handleChangeText(e.target.value)}
                required=""
            />
            <ul>
                {filteredCities.map((city) => (
                    <li key={city}>{city}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;