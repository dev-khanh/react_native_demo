import React, {PureComponent} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ScreenApp from './screenApp';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

let appState = {name: 'DEVK', fullName: 'Duong Quoc Khanh'};
function reducers(state = appState, action) {
  switch (action) {
    case 'SET_STATE':
      return {
        ...state,
        name: action.name,
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        fullName: action.fullName,
      };
    default:
      return state;
  }
}

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export default class ExampleSagaDemo extends PureComponent {
  render() {
    console.log('DEVK Render ExampleSagaDemo');
    return (
      <Provider store={store}>
        <ScreenApp />
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);
