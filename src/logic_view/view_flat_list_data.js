import React, {PureComponent} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
export default class ViewFlatListData extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, padding: 24}}>
        {this.props.isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.props.dataflatList}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    );
  }
}
