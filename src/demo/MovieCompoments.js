/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class MovieCompoments extends PureComponent {
  UNSAFE_componentWillMount() {
    this.props.onFetchMovies();
  }
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.textView}>
          {this.props.movies}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: 0,
  },
  textView: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    backgroundColor: 'dodgerblue',
  },
});
