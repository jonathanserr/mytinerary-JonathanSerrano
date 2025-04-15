import React from 'react';
import SearchBar from '../components/SearchBar';
import ContainerCard from '../components/ContainerCard';
import { useNavigate } from 'react-router-dom';

function Cities() {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate(-1);
    };

    return (
        <>
            <SearchBar />
            <ContainerCard />
            <button
                onClick={handleClickHome}
                className="bg-white text-black font-semibold rounded-xl p-5 hover:bg-blue-700 hover:text-white text-2xl shadow-lg transition-all"
            >
                Go back
            </button>
        </>
    );
}

export default Cities;
