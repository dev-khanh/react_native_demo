/* eslint-disable prettier/prettier */
export const ADD_MOVIES = 'ADD_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort,
    };
};
