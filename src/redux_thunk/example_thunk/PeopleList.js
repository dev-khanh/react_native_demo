import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getPeople} from './store';
import {connect} from 'react-redux';

class PeopleList extends PureComponent {
  componentDidMount() {
    this.props.getPeople();
  }
  render() {
    const {people, loading} = this.props;
    if (!loading) {
      return (
        <View style={styles.container}>
          {/* {people.length ? (
            people.map((person, i) => <Text key={i}>{person.name}</Text>)
          ) : (
            <Text>No People</Text>
          )} */}
            <Text>{people.title}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Loading...........</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//Map the redux state to your props.
const mapStateToProps = (state) => ({
  people: state.people,
  loading: state.loading,
});
//Map your action creators to your props.
const mapDispatchToProps = {
  getPeople,
};
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
