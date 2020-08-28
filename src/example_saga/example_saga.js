import React, {PureComponent} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import DemoContainer from './containers/demoContainer';
const appState = {name: 'duong Quoc Khanh'};
function reducer(state = appState, action) {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
export default class ExampleSaga extends PureComponent {
  render() {
    console.log('DEVK');
    return (
      <Provider store={store}>
        <DemoContainer />
      </Provider>
    );
  }
}
