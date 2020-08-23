/* eslint-disable prettier/prettier */
import {
    FETCH_MOVIES,
    FETCH_SUCCESS,
    FETCH_FAILED,
    ADD_MOVIES,
} from '../actions/actionTypes';
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';
import { addMoviesAction } from '../actions';
function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({ type: FETCH_SUCCESS, receivedMovies: receivedMovies });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
function* addNewMovie(action) {
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovies);
        if (result === true) {
            yield put({ type: FETCH_MOVIES, sort: 'desc' });
        }
        // (result === true && (yield put({ type: FETCH_MOVIES, sort: 'desc' })));
    } catch (error) {

    }
}
export function* watchAddNewMovie() {
    yield takeLatest(ADD_MOVIES, addNewMovie);
}
