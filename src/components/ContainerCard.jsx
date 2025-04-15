import { useSelector } from "react-redux";
import CityCard from "./CityCard";

function ContainerCard() {
    const{ cities, search, loading, error } = useSelector((state) => state.cityStore);
    
    if (loading) {
        return <h1 className="text-center">Loading...</h1>;
    }
    if (error) {
        return <h1 className="text-center">Error loading cities</h1>;
    }

    const filteredCities = cities.filter((city) => {
        return city.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
            {filteredCities.map((city) => (
                <CityCard key={city.id} city={city} />
            ))}
        </div>
    );
}

export default ContainerCard;