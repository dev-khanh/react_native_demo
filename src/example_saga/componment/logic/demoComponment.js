import React, {PureComponent} from 'react';
import DemoScreenView from '../view/DemoScreenView';
export default class DemoComponment extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('DEVK componentWillMount:');
  }
  render() {
    return <DemoScreenView title="DEMO" />;
  }
}
