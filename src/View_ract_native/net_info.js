import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class NetInforView extends PureComponent {
  componentWillMount() {
    this.checkNetInfo();
  }
  checkNetInfo = async () => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });
  };
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text>NetInfo</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
