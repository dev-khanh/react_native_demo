import React, {PureComponent} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
export default class AsyncStorageView extends PureComponent {
  componentWillMount() {
    this._storeData();
  }
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@DEVK', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <View>
        <Text>DEVK</Text>
      </View>
    );
  }
  componentDidMount() {
    this._retrieveData();
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@DEVK');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
}
