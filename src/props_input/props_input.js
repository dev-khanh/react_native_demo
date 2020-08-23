import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NewTodo from './NewTodo';
class PropsInput extends Component {
  state = {
    newTodoValue: 'ssssssssss',
  };
  render() {
    const {newTodoValue} = this.state;
    return (
      <View style={styles.viewContainer}>
        <Text>sssssssss</Text>
        <NewTodo
          onChangeNewTodoText={(newVal) =>
            this.setState({newTodoValue: newVal})
          }
          newTodoValue={newTodoValue}
          onAddNewTodo={this.handleOnAddNewTodo}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    margin: 20,
  },
});
export default PropsInput;
