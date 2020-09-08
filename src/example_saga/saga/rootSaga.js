import {fork} from 'redux-saga/effects';
import {getApIdata, getApIdataParams} from './apiSaga';
export default function* rootSaga() {
  yield fork(getApIdata);
  yield fork(getApIdataParams);
}
