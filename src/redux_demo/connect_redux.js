/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
class ConnectRedux extends Component {
  render() {
    return (
      <View style={styles.viewsContainer}>
        <TouchableOpacity onPress={() => this.setOnClickAddDispatch()}>
          <Text style={styles.textContainer}>Add</Text>
        </TouchableOpacity>
        <Text style={styles.textContainer}>{this.props.number}</Text>
      </View>
    );
  }
  setOnClickAddDispatch = () => {
    this.props.dispatch({
      type: 'UPDATE',
      number: this.props.number + 1,
    });
    if (this.props.number === 10) {
      this.props.dispatch({
        type: 'UPDATE_TODO',
        errorMsg: 'Errror !!!',
      });
    }
  };
}
const styles = StyleSheet.create({
  viewsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    color: 'red',
    fontSize: 100,
  },
});
const ConectDataState = (state) => {
  return {
    number: state.renderData.number,
    errorMsg: state.todo.errorMsg,
  };
};
export default connect(ConectDataState)(ConnectRedux);
