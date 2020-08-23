/* eslint-disable prettier/prettier */
import { ADD_MOVIES, FETCH_MOVIES, FETCH_SUCCESS, FETCH_FAILED } from './actionTypes';
export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort,
    };
};
export const addMoviesAction = (newMovies) => {
    return {
        type: ADD_MOVIES,
        newMovies,
    };
};
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCESS,
        receivedMovies,
    };
};
export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error,
    };
};
