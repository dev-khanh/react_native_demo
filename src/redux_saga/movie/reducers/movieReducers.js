/* eslint-disable prettier/prettier */
import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCESS, FETCH_FAILED, ADD_MOVIES } from '../actions/actionTypes';
const moviesReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIES:
        //     return [...movies, action.newMovie];
        default:
            return movies;
    }
};
export default moviesReducers;
