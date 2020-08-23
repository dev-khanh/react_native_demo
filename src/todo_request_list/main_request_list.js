/* eslint-disable consistent-this */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import ListView from './components/ListView';
import Services from './services';
var _this;
class MainRequestList extends Component {
  constructor(props) {
    super(props);
    _this = this;
    this.state = {
      data: [],
      isLoading: true,
      newItemValue: '',
    };
  }

  async componentDidMount() {
    const response = await Services.getTodos();
    _this.setState({data: response, isLoading: false});
  }
  renderContent = () => {
    const {data, newItemValue} = this.state;

    return (
      <View>
        <View style={styles.newItemWrapper}>
          <TextInput
            placeholder="New TODO"
            style={styles.input}
            value={newItemValue}
            type="text"
            onChangeText={(text) => this.setState({newItemValue: text})}
            autoFocus
          />
          <TouchableOpacity onPress={this.handleCreateNewItem}>
            <Text>sssssssssssss</Text>
          </TouchableOpacity>
        </View>

        <ListView data={data} deleteItem={this.deleteItem} />
      </View>
    );
  };
  render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : this.renderContent()}
      </View>
    );
  }
  handleCreateNewItem = () => {
    const {newItemValue} = this.state;
    const newItem = {
      id: '',
      value: '',
    };

    if (newItemValue) {
      newItem.id = Date.now().toString();
      newItem.value = newItemValue;
    }
    this.setState((currState) => ({
      newItemValue: '',
      data: [...[newItem, ...currState.data]],
    }));
  };
  deleteItem = (id) => {
    const {data} = this.state;
    const array = [...data];
    const index = array.findIndex((e) => e.id === id);
    array.splice(index, 1);
    this.setState({data: array});
  };
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ececec',
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  newItemWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    flexDirection: 'row',
  },
});
export default MainRequestList;
