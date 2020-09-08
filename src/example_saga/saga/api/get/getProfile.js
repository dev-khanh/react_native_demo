// import {FETCH_SUCCESS} from '../../../actions/actionTypes';
// import {put} from 'redux-saga/effects';

const urlGetMovies =
  'http://vietco.dfm-engineering.com/webservice/restful/server.php/local_user_get_profile';
function* getAPI() {
  try {
    const response = yield fetch(urlGetMovies, {
      method: 'GET',
      headers: {
        token: 'e2aa59eeb28565ae6dc2922ddc0080aa',
        'Content-Type': 'application/json',
      },
      body: '',
    });
    // console.log(movies.data[0].membership);
    // yield put({
    //   type: FETCH_SUCCESS,
    //   receivedMovies: movies.data[0].membership,
    // });
    return yield response.status === 200 ? response.json() : [];
  } catch (error) {}
}
function* getAPIParams(data) {
  try {
    console.log(data.sort);
    // const response = yield fetch(urlGetMovies, {
    //   method: 'GET',
    //   headers: {
    //     token: 'e2aa59eeb28565ae6dc2922ddc0080aa',
    //     'Content-Type': 'application/json',
    //   },
    //   body: '',
    // });
    // const movies = yield response.status === 200 ? response.json() : [];
    // // console.log(movies.data[0].membership);
    // yield put({
    //   type: 'FETCH_SUCCESS',
    //   receivedMovies: movies.data[0].membership,
    // });
  } catch (error) {}
}
export const Api = {
  getAPI,
  getAPIParams,
};
