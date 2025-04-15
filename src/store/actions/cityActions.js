import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const changeSearch = (searchTerm) => {
    return {
        type: 'CHANGE_SEARCH',
        payload: searchTerm,
    };
};

export const getCities = createAsyncThunk("GET_CITIES", async () => {
    console.log("Entramos a la funcion asincrona");
    const response = await axios.get("http://localhost:6060/api/cities/allCities");  
    console.log(response.data);
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return response.data.response
})