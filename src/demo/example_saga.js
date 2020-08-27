/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import MovieContainer from './MoviesContainers';
const sagaMiddleware = createSagaMiddleware();
import movieReducers from './movieReducers';
const allReduces = combineReducers({
    movieReducers,
});
let store = createStore(allReduces, applyMiddleware(sagaMiddleware));
export default class ExampleSaga extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <MovieContainer />
            </Provider>
        );
    }
}
sagaMiddleware.run(rootSaga);
