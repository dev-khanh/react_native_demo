/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
const allReduces = combineReducers({
    mainReducer,
});
export default allReduces;
