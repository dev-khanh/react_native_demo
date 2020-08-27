import {takeLatest, put, fork} from 'redux-saga/effects';
export default function* rootSaga() {
  yield fork(getApiSaga);
  yield fork(getDataSaga);
}
function* getApiSaga() {
  yield takeLatest('UP_SORT', functiongetAPI);
}
function* getDataSaga() {
  yield takeLatest('UP_SORT_TOW', functiongetDEMO);
}
function* functiongetAPI() {
  try {
    const response = yield fetch(
      'http://vietco.dfm-engineering.com/webservice/restful/server.php/local_user_get_profile',
      {
        method: 'GET',
        headers: {
          token: 'e2aa59eeb28565ae6dc2922ddc0080aa',
          'Content-Type': 'application/json',
        },
        body: '',
      },
    );
    const getdataMovies = yield response.status === 200 ? response.json() : [];
    console.log('dev data: ' + getdataMovies.data[0].fullname);
    yield put({type: 'SET_STATE', name: 'name'});
  } catch (e) {}
}
function* functiongetDEMO() {
  try {
    const response = yield fetch('https://reactnative.dev/movies.json');
    const getdataMovies = yield response.status === 200 ? response.json() : [];
    console.log('dev data: ', getdataMovies.title);
  } catch (e) {}
}
