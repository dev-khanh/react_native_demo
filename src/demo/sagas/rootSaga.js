/* eslint-disable prettier/prettier */
import { call } from 'redux-saga/effects';
import { watchFetchMovies } from './moviesSaga';
export default function* rootSaga() {
    yield call(watchFetchMovies);
}
