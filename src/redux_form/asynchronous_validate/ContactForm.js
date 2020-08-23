/* eslint-disable prettier/prettier */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TextInput } from 'react-native';


import validate from './validate';
import asyncValidate from './asyncValidate';

import { CONTACT_FORM } from './FormNames';

import RemoteSubmitButton from './RemoteSubmitButton';

const submit = values => {
    alert(`Validation success. Value = ~${JSON.stringify(values)}`);
};



// Normalize tu dong chinh sua
const normalizeUpper = value => value && value.toUpperCase();
const normalizeLower = value => value && value.toLowerCase();

import NormalizePhoneNumber from './NormalizePhoneNumber';

const renderField = ({ label, keyboardType, placeholder, meta: { touched, error, warning, asyncValidating }, input: { onChange, ...restInput } }) => {
    console.log('DEVK: ', asyncValidating);
    return (
        <View style={styles.viewContainerField}>
            <View style={styles.viewContainer}>
                <Text style={styles.textContainer}>{label}</Text>
                <TextInput style={styles.textInputContainer} keyboardType={keyboardType} onChangeText={onChange} {...restInput}
                    placeholder={placeholder} autoCapitalize="none"
                />
            </View>
            {touched && ((error && <Text style={styles.colorRed}>{error}</Text>) ||
                (warning && <Text style={styles.colororange}>{warning}</Text>) ||
                (asyncValidating && <Text style={styles.colororange}>Validating...</Text>))}
        </View>
    );
};
const ContactComponent = props => {
    // const { handleSubmit, submitting, reset } = props;
    // console.log(`submitting = ${submitting}`);
    return (
        <View style={styles.viewContainerContact}>
            <Text style={styles.textContact}>Redux-form async validate</Text>
            <Text>username: must be hoang, hoangnd, or ndhoang</Text>
            <Text>email: must be sunlight4d@gmail.com</Text>
            <Field name="username" keyboardType="default" label="Username" placeholder="Enter name" component={renderField}
                normalize={normalizeUpper}
            />
            <Field name="fullname" keyboardType="default" label="fullname" placeholder="Full name" component={renderField}
                normalize={normalizeUpper}
            />
            <Field name="phoneNumber" keyboardType="numeric" label="phone: " placeholder="Enter phone" component={renderField}
                normalize={NormalizePhoneNumber}
            />
            <Field name="email" keyboardType="email-address" label="Email: " placeholder="Enter email" component={renderField}
            />
            <Field name="age" keyboardType="numeric" label="Age: " component={renderField}
            />
            <RemoteSubmitButton />
        </View>
    );
};
const ContactForm = reduxForm({
    form: CONTACT_FORM,
    validate,
    asyncValidate,
    asyncBlurFields: ['username'],
    onSubmit: submit,
})(ContactComponent);
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
    colorRed: {
        color: 'red',
    },
    colororange: {
        color: 'orange',
    },
});
