import React, {PureComponent} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
export default class MovieCompoments extends PureComponent {
  state = {
    movieName: '',
    releaseYear: '',
  };
  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewContainerchild2}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              this.props.onFetchMovies('asc');
            }}>
            <Text style={styles.textTouchable}>Fetch movies</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.movies.data}
          keyExtractor={(item) => item.title}
          renderItem={({item, index}) => (
            <Text style={styles.textView(index)} key={index}>
              {`${item.title}, releaseYear=${item.fullname}`}
            </Text>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: 0,
  },
  viewContainerchild: {
    height: 100,
    margin: 10,
  },
  viewContainerchild2: {
    height: 70,
    flexDirection: 'row',
  },
  textContainer: {
    margin: 10,
    fontWeight: 'bold',
    color: 'forestgreen',
    fontSize: 20,
  },
  textContainerback: {
    margin: 10,
    color: 'black',
    fontSize: 20,
  },
  textInputContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  touchableOpacity: {
    padding: 10,
    margin: 10,
    width: 150,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'darkviolet',
  },
  textTouchable: {
    fontSize: 18,
    color: 'white',
  },
  textRender: {},
  textView: (index) => ({
    padding: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    backgroundColor: index % 2 === 0 ? 'dodgerblue' : 'mediumseagreen',
  }),
});
