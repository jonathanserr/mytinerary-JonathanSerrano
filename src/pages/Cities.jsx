import React from 'react';
import { useState } from 'react';
import inConstructionPage from "../images/inConstruction.jpg";
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CallApi from '../components/CallApi';

function Cities() {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleClickHome = () => {
        navigate(-1);
    };

 
    // Updates the text with what is written in the input field
    const handleChangeText = (newText) => {
        setText(newText);
    };

    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${inConstructionPage})` }}
        >
            <SearchBar searchText={text} handleChangeText={handleChangeText} />
            <CallApi />
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