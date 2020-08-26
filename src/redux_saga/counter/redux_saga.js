/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
//Middleware
const sagaMiddleware = createSagaMiddleware();
//Từ applyMiddleware vào Reducers thì tạo một store, sagaMiddleware nằm giữa Action và Reducers.
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

export default class ReduxSaga extends Component {
    render() {
        return <App />;
    }
}

sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app
