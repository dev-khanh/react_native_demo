import React, {PureComponent} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createApplyMiddleware from 'redux-saga';
const SagaMiddleware = createApplyMiddleware();
import MainNavigationStack from './total/MainNavigationStack';
import rootSaga from './saga/rootSaga';
import allReduces from './reducer';
const store = createStore(allReduces, applyMiddleware(SagaMiddleware));
export default class ExampleSaga extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MainNavigationStack />
      </Provider>
    );
  }
}
SagaMiddleware.run(rootSaga);
