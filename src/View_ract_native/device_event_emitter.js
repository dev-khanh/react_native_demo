import React, {PureComponent} from 'react';
import {
  View,
  Text,
  DeviceEventEmitter,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class DeviceEventEmitterView extends PureComponent {
  componentDidMount() {
    DeviceEventEmitter.addListener('DEVK', (data) => {
      console.log('DEVK SHOW DATA: ' + data);
    });
  }
  render() {
    return (
      <View style={styles.viewContainer}>
        <TouchableOpacity
          style={styles.touchEventClickEmit}
          onPress={() => this.setOnClickEmit()}>
          <Text style={styles.textShowEmit}>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
  setOnClickEmit = () => {
    DeviceEventEmitter.emit('DEVK', 'Duong Quoc Khanh');
  };
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchEventClickEmit: {
    width: width / 9,
    height: height / 18,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textShowEmit: {
    color: 'yellow',
  },
});
