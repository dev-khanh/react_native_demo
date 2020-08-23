import React, {PureComponent} from 'react';
import PeopleList from './PeopleList';
import {Provider} from 'react-redux';
import store from './store';
type Props = {};
export default class MainReduxThunk extends PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <PeopleList />
      </Provider>
    );
  }
}
