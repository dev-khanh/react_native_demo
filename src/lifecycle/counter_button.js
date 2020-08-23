/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  render() {
    console.log('RENDER');
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState((state) => ({ count: state.count + 1 }))}>
          <Text style={{ color: this.props.color }}>{this.state.count}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default CounterButton;
