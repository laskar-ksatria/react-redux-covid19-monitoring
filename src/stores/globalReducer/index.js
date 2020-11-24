import * as Type from './type';

const initialState = {
    globalData: null,
    isHeader: false,
    dailyData: null,
    dailyPercentages: null,
};

const globalReducer = ((state=initialState, action) => {
    let { type, data } = action;
    switch(type) {
        case Type.SET_GLOBAL_DATA:
            return {...state, globalData: data};
        case Type.SET_HEADER:
            return {...state, isHeader: data};
        case Type.SET_DAILY_DATA:
            return {...state, dailyData: data};
        case Type.SET_DAILY_PERCENTAGES:
            return {...state, dailyPercentages: data};
        default:
            return state;
    };
})


export default globalReducer;