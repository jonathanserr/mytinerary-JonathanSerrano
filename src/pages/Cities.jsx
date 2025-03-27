import React from 'react';
import { useState } from 'react';
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
        <>
            <SearchBar searchText={text} handleChangeText={handleChangeText} />
            <CallApi searchText={text}/>
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