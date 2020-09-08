import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
export default class NextScreen extends PureComponent {
  render() {
    return (
      <View>
        <Text>{this.props.count}</Text>
      </View>
    );
  }
}
