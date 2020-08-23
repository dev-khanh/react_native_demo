/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InstanceInterval from './instance_interval';
var arrays = [];
var _timerInterval = new InstanceInterval(5000);
class Demosetinterval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setItemLick: 0,
    };
  }
  UNSAFE_componentWillMount() { }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setOnClick()}>
          <Text>START</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setOnClickStop()}>
          <Text>STOP</Text>
        </TouchableOpacity>
      </View>
    );
  }
  setOnClick() {
    this.setState({
      setItemLick: this.state.setItemLick + 1,
    });
    arrays.push('khanh ' + this.state.setItemLick);
    _timerInterval.start();
  }
  setOnClickStop() {
    if (_timerInterval.isRunning()) {
      _timerInterval.stop();
    }
  }
}
export default Demosetinterval;
