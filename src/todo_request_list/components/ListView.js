import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ListViewItem from './ListViewItem';

class ListView extends Component {
  keyExtractor = (item) => item.id.toString();
  render() {
    const {data} = this.props;
    return (
      <View style={styles.viewContainer}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => (
            <ListViewItem
              deleteItemHandler={this.props.deleteItem}
              data={item}
            />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});
module.exports = ListView;
