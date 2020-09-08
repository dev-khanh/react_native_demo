import React, {Component} from 'react';
import {Text, ScrollView, View, StyleSheet, FlatList} from 'react-native';

export default class onRefresh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [
        {id: 1, text: 'option1'},
        {id: 2, text: 'option2'},
        {id: 3, text: 'option3'},
      ],
      isFetching: false,
    };
  }
  onRefresh() {
    console.log('refreshing');
    this.setState({isFetching: true}, function () {
      this.fetchData();
    });
  }
  fetchData() {
    alert('test');
    const newList = [
      {id: 1, text: 'a'},
      {id: 2, text: 'b'},
      {id: 3, text: 'c'},
    ];
    this.setState({stories: newList, isFetching: false});
  }
  _renderItem = ({item}) => <Text>{item.text}</Text>;
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Hello World!!!</Text>
        <FlatList
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          data={this.state.stories}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
});
