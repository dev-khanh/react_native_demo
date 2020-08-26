/* eslint-disable prettier/prettier */
import { put, takeLatest } from 'redux-saga/effects';
function* fetchMovies() {
    try {
        const response = yield fetch('http://vietco.dfm-engineering.com/webservice/restful/server.php/local_user_get_profile', {
            method: 'GET',
            headers: {
                token: 'e2aa59eeb28565ae6dc2922ddc0080aa',
                'Content-Type': 'application/json',
            },
            body: '',
        });
        const movies = yield response.status === 200 ? response.json() : [];
        // console.log('DEVK: ', movies.data[0].fullname);
        yield put({ type: 'FETCH_SUCCESS', receivedMovies: movies.data[0].fullname });
    } catch (error) {
    }
}
export function* watchFetchMovies() {
    yield takeLatest('FETCH_MOVIES', fetchMovies);
}
