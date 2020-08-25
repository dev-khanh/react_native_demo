/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { timer: 0 };
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });
        }, 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{`Welcome App: ${this.state.timer}`}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32, 53, 70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white',
    },
});
