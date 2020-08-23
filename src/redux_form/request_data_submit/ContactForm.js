/* eslint-disable prettier/prettier */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

import submit from './submit';

// const submit = values => {
//     alert(`Validation success. Value = ~${JSON.stringify(values)}`);
// };
const renderField = ({ label, keyboardType, placeholder, meta: { touched, error, warning }, input: { onChange, ...restInput } }) => {
    return (
        <View style={styles.viewContainerField}>
            <View style={styles.viewContainer}>
                <Text style={styles.textContainer}>{label}</Text>
                <TextInput style={styles.textInputContainer} keyboardType={keyboardType} onChangeText={onChange} {...restInput}
                    placeholder={placeholder} autoCapitalize="none"
                />
            </View>
            {touched && ((error && <Text style={styles.colorRed}>{error}</Text>) || (warning && <Text style={styles.colororange}>{warning}</Text>))}
        </View>
    );
};
const ContactComponent = props => {
    const { handleSubmit, submitting, reset } = props;
    console.log(`submitting = ${submitting}`);
    return (
        <View style={styles.viewContainerContact}>
            <Text style={styles.textContact}>Redux-form Submit severs</Text>
            <Text>username: must be hoang, hoangnd, or ndhoang</Text>
            <Text>email: must be sunlight4d@gmail.com</Text>
            <Field name="username" keyboardType="default" label="Username" placeholder="Enter name" component={renderField}
            />
            <Field name="email" keyboardType="email-address" label="Email: " placeholder="Enter email" component={renderField}
            />
            <Field name="age" keyboardType="numeric" label="Age: " component={renderField}
            />
            <TouchableOpacity onPress={handleSubmit(submit)} style={styles.touch} disabled={submitting}>
                <Text style={styles.textTouch}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={styles.touch} disabled={submitting}>
                <Text style={styles.textTouchReset}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
};
const ContactForm = reduxForm({ form: 'contact' })(ContactComponent);
export default ContactForm;
const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    viewContainerField: {
        flexDirection: 'column',
        height: 70,
        justifyContent: 'flex-start',
    },
    textContainer: {
        fontSize: 14, fontWeight: 'bold', width: 80,
    },
    textInputContainer: {
        borderColor: 'steelblue',
        borderWidth: 1,
        height: 37,
        width: 220,
        padding: 5,
    },
    viewContainerContact: {
        flex: 1,
        flexDirection: 'column',
        margin: 40,
        justifyContent: 'flex-start',
    },
    textContact: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        margin: 10,
    },
    touch: {
        margin: 10,
        alignItems: 'center',
    },
    textTouch: {
        backgroundColor: 'steelblue', color: 'white', fontSize: 16, height: 37, width: 200, textAlign: 'center', padding: 10,
    },
    textTouchReset: {
        backgroundColor: 'powderblue', color: 'black', fontSize: 16, height: 37, width: 200, textAlign: 'center', padding: 10,
    },
    colorRed: {
        color: 'red',
    },
    colororange: {
        color: 'orange',
    },
});
