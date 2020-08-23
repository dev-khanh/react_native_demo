/* eslint-disable prettier/prettier */
import { fork } from 'redux-saga/effects';
import { watchFetchMovies, watchAddNewMovie } from './moviesSaga';
export default function* rootSaga() {
    // yield call(watchFetchMovies);
    // yield call(watchAddNewMovie);
    yield [
        fork(watchFetchMovies),
        fork(watchAddNewMovie),
    ];
}
