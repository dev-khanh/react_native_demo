import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropsInfo from './props_info';
class TodoDemo extends Component {
  state = {
    noteArray: [],
    noteText: '',
    data: 'DEVK Essssss',
  };
  shouldComponentUpdate(nextProps, nextState) {
    // Demo = Demo limit state render
    if (this.state.data === nextState.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log('DEVK render TodoDemo');
    let notes = this.state.noteArray.map((val, key) => {
      return (
        //props pass parameters
        <PropsInfo
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>{this.state.data}</Text>
        </View>
        <ScrollView style={styles.ScrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.addNote.bind(this)}
            style={styles.addButton}>
            <Text style={styles.addButtonText}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.functionDemo()}
            style={styles.deleteButton}>
            <Text style={styles.addButtonText}> - </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textinput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder="> Note"
          />
        </View>
      </View>
    );
  }
  functionDemo = () => {
    this.setState({data: 'Demo'});
  };
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#EE91E639',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headertext: {
    color: '#333333',
    fontSize: 18,
    padding: 20,
  },
  ScrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E92E64',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  deleteButton: {
    backgroundColor: '#E92E64',
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    marginLeft: 200,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textinput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 15,
    paddingTop: 56,
    backgroundColor: '#252525',
    borderTopWidth: 22,
    borderTopColor: '#ededed',
  },
});
export default TodoDemo;
