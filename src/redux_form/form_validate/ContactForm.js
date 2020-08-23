/* eslint-disable prettier/prettier */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
const submit = values => {
    alert(`Validation success. Value = ~${JSON.stringify(values)}`);
};

// validation
const required = value => value ? undefined : 'Required';
const maxLength15 = value => value && value.length > 15 ? 'Must be 15 characters or less' : undefined;
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const isValidEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
// Warning
const over70YearsOld = value => value && value > 70 ? 'You might be too old.. ' : undefined;
const isYahooMail = value => value && /.+@yahoo\.com/.test(value) ? 'Really? you still use yahoo mail? ' : undefined;


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
            <Field name="username" keyboardType="default" label="Username" component={renderField}
                validate={[required, maxLength15]}
            />
            <Field name="email" keyboardType="email-address" label="Email: " component={renderField}
                validate={isValidEmail}
                warn={isYahooMail}
            />
            <Field name="age" keyboardType="numeric" label="Age: " component={renderField}
                validate={[required, number, minValue18]}
                warn={over70YearsOld}
            />
            <TouchableOpacity onPress={handleSubmit(submit)} style={styles.touch}>
                <Text style={styles.textTouch}>Submit</Text>
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
    colorRed: {
        color: 'red',
    },
    colororange: {
        color: 'orange',
    },
});
