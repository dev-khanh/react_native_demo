/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import movieReducers from './movieReducers';
const allReduces = combineReducers({
    movieReducers,
});
export default allReduces;
