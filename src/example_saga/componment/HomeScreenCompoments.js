import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {mainContainer, textHomeScreen} from '../total/styles';
export default class HomeScreenCompoments extends PureComponent {
  UNSAFE_componentWillMount() {
    this.props.setonClick();
    this.props.setOnClickParams({params: 'DEVK'});
  }
  render() {
    console.log('DEVK state: ', this.props.receivedMovies);
    return (
      <View style={mainContainer}>
        <Text style={textHomeScreen}>{this.props.count}</Text>
        <TouchableOpacity onPress={() => this.setOnClickCount()}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
  setOnClickCount = () =>
    this.props.dispatchCount(this.props.count, this.props.navigation);
}
