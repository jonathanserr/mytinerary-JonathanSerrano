import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducer';

const initialState = {
    search: '',
    cities: [],
    loading: false,
    error: null,
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH':
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: {
        cityStore: cityReducer, // Asegúrate de que el nombre coincida con el usado en `useSelector`
    },
});

export default store;
