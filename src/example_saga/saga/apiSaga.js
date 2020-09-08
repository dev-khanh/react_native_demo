/* eslint-disable prettier/prettier */
import {
  EVENT_GET_API,
  FETCH_SUCCESS,
//   FETCH_FAILED,
  EVENT_ADD_PARAMS,
} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './api/get/getProfile';
function* fetchMovies() {
  try {
    const receivedMovies = yield Api.getAPI();
    yield put({type: FETCH_SUCCESS, receivedMovies: receivedMovies});
  } catch (error) {
    // yield put({type: FETCH_FAILED, error});
  }
}
export function* getApIdata() {
  yield takeLatest(EVENT_GET_API, fetchMovies);
}
function* addNewMovie(action) {
  try {
    console.log(action);
    // const result = yield Api.insertNewMovieFromApi(action.newMovies);
    // if (result === true) {
    //   yield put({type: FETCH_MOVIES, sort: 'desc'});
    // }
    // (result === true && (yield put({ type: FETCH_MOVIES, sort: 'desc' })));
  } catch (error) {}
}
export function* getApIdataParams() {
  yield takeLatest(EVENT_ADD_PARAMS, addNewMovie);
}
