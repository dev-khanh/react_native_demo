/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor called.');
    this.state = {
      number: 0,
      mountButtonTitle: 'UNMOUNT',
    };
    this.showCounter = true;
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount called.');
  }
  render() {
    console.log('render called');
    return (
      <View style={styles.container}>
        {this.showCounter ? (
          <Text style={styles.text}>{this.state.number}</Text>
        ) : null}
        {this.showCounter ? (
          <Button onPress={this.incrementNumber.bind(this)} title="INCREMENT" />
        ) : null}
        <Button
          onPress={this.toggleCounter.bind(this)}
          title={this.state.mountButtonTitle}
        />
      </View>
    );
  }
  componentDidMount() {
    console.log('componentDidMount called.');
  }

  UNSAFE_componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.');
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }

  UNSAFE_componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate called.');
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
  }
  incrementNumber() {
    this.setState({ number: this.state.number + 1 });
  }

  toggleCounter() {
    if (this.showCounter === true) {
      this.setState({ mountButtonTitle: 'MOUNT' });
      this.showCounter = false;
      this.setState({ number: 0 });
    } else {
      this.setState({ mountButtonTitle: 'UNMOUNT' });
      this.showCounter = true;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 31,
    marginBottom: 10,
  },
});
export default LifecycleDemo;
