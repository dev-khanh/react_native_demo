/* eslint-disable prettier/prettier */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 20) {
        errors.username = 'username must be less than or eua 20 characterd';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.age) {
        errors.age = 'Required';
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Age must be a number';
    } else if (Number(values.age < 18)) {
        errors.age = 'You must be at last 18 year old';
    }
    return errors;
};
const warn = values => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = 'You seem a bit young';
    }
    return warnings;
};
const submit = values => {
    alert(`Validation success. Value = ~${JSON.stringify(values)}`);
};
const renderField = ({ label, keyboardType, meta: { touched, error, warning }, input: { onChange, ...restInput } }) => {
    return (
        <View style={styles.viewContainerField}>
            <View style={styles.viewContainer}>
                <Text style={styles.textContainer}>{label}</Text>
                <TextInput style={styles.textInputContainer} keyboardType={keyboardType} onChangeText={onChange} {...restInput} />
            </View>
            {touched && ((error && <Text style={styles.colorRed}>{error}</Text>) || (warning && <Text style={styles.colororange}>{warning}</Text>))}
        </View>
    );
};
const ContactComponent = props => {
    const { handleSubmit } = props;
    return (
        <View style={styles.viewContainerContact}>
            <Text style={styles.textContact}>Redux-form example</Text>
            <Field name="username" keyboardType="default" label="Username" component={renderField} />
            <Field name="email" keyboardType="email-address" label="Email: " component={renderField} />
            <Field name="age" keyboardType="numeric" label="Age: " component={renderField} />
            <TouchableOpacity onPress={handleSubmit(submit)} style={styles.touch}>
                <Text style={styles.textTouch}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};
const ContactForm = reduxForm({ form: 'contact', validate, warn })(ContactComponent);
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
    colorRed: {
        color: 'red',
    },
    colororange: {
        color: 'orange',
    },
});
