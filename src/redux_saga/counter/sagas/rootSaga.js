/* eslint-disable prettier/prettier */
import { all } from 'redux-saga/effects';
import { watchIncrement, watchDecrement, sayHello } from './counterSagas';

export default function* rootSaga() {
    yield all([sayHello, watchIncrement(), watchDecrement()]);
}
