import React, {PureComponent} from 'react';
import {TextInput, StyleSheet} from 'react-native';
export default class TextInputView extends PureComponent {
  state = {textState: ''};
  render() {
    return (
      <TextInput
        style={styles.viewInput}
        onChangeText={(text) => this.onChangeText(text)}
        value={this.state.textState}
      />
    );
  }
  onChangeText(text) {
    console.log('DEVK dacta:  ' + text);
    this.setState({textState: text});
  }
}
const styles = StyleSheet.create({
  viewInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
