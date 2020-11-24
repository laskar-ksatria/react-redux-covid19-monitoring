import { SET_COUNTRIES, SET_COUNTRY_DATA, SET_COUNTRY, SET_COUNTRY_LOADING } from './type';

const initialState = {
    countries: null,
    countryData: null,
    country: "",
    countryLoading: false,
};

const countryReducer = ((state=initialState, action) => {
    let { type, data } = action;
    switch(type) {
        case SET_COUNTRY_DATA:
            return {...state, countryData: data};
        case SET_COUNTRIES:
            return {...state, countries: data};
        case SET_COUNTRY:
            return {...state, country: data};
        case SET_COUNTRY_LOADING:
            return {...state, countryLoading: data};
        default:
            return state;
    };
})



export default countryReducer;