import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ConnectRedux from './connect_redux';
import {createStore} from 'redux';
import reducer from './index';

const store = createStore(reducer);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
class ReduxDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectRedux />
      </Provider>
    );
  }
}
export default ReduxDemo;
