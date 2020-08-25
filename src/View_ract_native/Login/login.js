/* eslint-disable react/no-string-refs */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import {
    View, Text, StyleSheet, Image, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback,
    Keyboard, TouchableOpacity
} from 'react-native';
export default class Login extends PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                {/*  KeyboardAvoidingView  Day TextInput len ban phim */}
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    {/* TouchableWithoutFeedback bam ra khoi mang hinh ban phim truoc xuong */}
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.container}>
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logo} source={require('./logo.png')} />
                                    <Text style={styles.title}>Account Information</Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <TextInput style={styles.input} placeholder="Enter username/email"
                                        placeholderTextColor="rgba(255, 255, 255, 0.8)" keyboardType="email-address"
                                        returnKeyType="next" autoCorrect={false}
                                        onSubmitEditing={() => this.refs.txtPassword.focus()} />
                                    <TextInput style={styles.input} placeholder="Enter password"
                                        placeholderTextColor="rgba(255, 255, 255, 0.8)" keyboardType="email-address"
                                        returnKeyType="go" autoCorrect={false}
                                        secureTextEntry={true}  // password
                                        ref={'txtPassword'}
                                    />
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>SIGN IN</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 170,
        height: 60,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
