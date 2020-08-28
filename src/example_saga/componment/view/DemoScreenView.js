import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
export default class DemoScreenView extends PureComponent {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
