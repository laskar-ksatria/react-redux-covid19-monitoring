//Reducer
import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import countryReducer from './countryReducer';

//export functions
export * from './globalReducer/functions';
export * from './countryReducer/functions';

//export types
export * from './globalReducer/type';
export * from './countryReducer/type';

//export dataUtils
export * from './utils/sideBarList';

const rootReducer = combineReducers({ globalReducer, countryReducer });

//Export Default
export default rootReducer;