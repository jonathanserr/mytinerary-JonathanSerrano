import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getItineraryByCity = createAsyncThunk('itinerary/getItineraries', async (cityId) => {

const itinerary = await axios.get(`http://localhost:6060/api/itineraries/city/${cityId}`)
console.log("Data en getItineraryByCity:", itinerary.data.response);



return itinerary.data.response
})

export default getItineraryByCity

