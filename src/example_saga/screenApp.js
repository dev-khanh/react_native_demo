import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
class ScreenApp extends PureComponent {
  UNSAFE_componentWillMount() {
    this.props.setOnClickAPI();
    this.props.fechDEMO();
  }
  render() {
    console.log('DEVK Screen App: ' + this.props.name);
    return (
      <View>
        <Text>{this.props.fullName}</Text>
      </View>
    );
  }
}
const connectState = (state) => {
  return {
    name: state.name,
    fullName: state.fullName,
  };
};
const connectApidata = (dispatch) => {
  return {
    setOnClickAPI: () => {
      dispatch(connectDB());
    },
    fechDEMO: () => {
      dispatch(connectDemo());
    },
  };
};
const connectDB = (sort) => {
  return {
    type: 'UP_SORT',
    sort,
  };
};
const connectDemo = (sort) => {
  return {
    type: 'UP_SORT_TOW',
    sort,
  };
};
export default connect(connectState, connectApidata)(ScreenApp);
