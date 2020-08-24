/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class ScreenOne extends PureComponent {
    UNSAFE_componentWillMount() {
        this.props.getdataStore();
    }

    render() {
        const { payload } = this.props;
        console.log('DATA: ', payload);
        return (
            <View style={styles.viewContainer}>
                <TouchableOpacity onPress={() => this.setOnClickDispatch()}>
                    <Text style={styles.textContainer}>{payload.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    setOnClickDispatch = () => {
    }
}
const styles = StyleSheet.create({
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'red',
    },
    textContainer: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'gray',
    },
});
const connectData = (state) => {
    return {
        payload: state.payload,
    };
};
const getdataStore = () => {
    return async (dispatch) => {
        try {
            const starWarsPromise = await fetch('https://reactnative.dev/movies.json');
            const people = await starWarsPromise.json();
            // console.log('people-----------', people);
            dispatch({
                type: 'SETSTATE',
                payload: people,
            });
        } catch (e) {
            console.log('Getting People Error---------', e);
        }
    };
};

const mapDispatchToProps = {
    getdataStore,
};
export default connect(connectData, mapDispatchToProps)(ScreenOne);
