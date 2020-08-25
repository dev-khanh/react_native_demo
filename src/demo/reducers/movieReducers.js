/* eslint-disable prettier/prettier */
import { FETCH_SUCCESS, FETCH_FAILED } from '../actions/actionTypes';
const moviesReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        default:
            return movies;
    }
};
export default moviesReducers;
