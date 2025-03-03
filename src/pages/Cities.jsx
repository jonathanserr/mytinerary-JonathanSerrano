import React from 'react';
import inConstructionPage from "../images/inConstruction.jpg";
import { useNavigate } from 'react-router-dom';

function Cities() {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate(-1);
    }

    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${inConstructionPage})` }}
        >
            <button 
                onClick={handleClickHome}
                className="bg-white text-black font-semibold rounded-xl p-5 hover:bg-blue-700 hover:text-white text-2xl shadow-lg transition-all"
            >
                Go back
            </button>
        </div>
    );
}

export default Cities;