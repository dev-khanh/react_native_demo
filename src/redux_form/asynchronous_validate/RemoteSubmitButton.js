/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CONTACT_FORM } from './FormNames';
const RemoteSubmitButton = ({ dispatch }) => {
    return (
        <TouchableOpacity style={styles.touch} onPress={() => dispatch(submit(CONTACT_FORM))}>
            <Text style={styles.textTouch}>Submit</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    touch: {
        margin: 10,
        alignItems: 'center',
    },
    textTouch: {
        backgroundColor: 'steelblue', color: 'white', fontSize: 16, height: 37, width: 200, textAlign: 'center', padding: 10,
    },
});
export default connect()(RemoteSubmitButton);
