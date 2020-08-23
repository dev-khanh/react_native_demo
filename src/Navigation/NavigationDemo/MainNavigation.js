/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.viewContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
}
function Details() {
    return (
        <View style={styles.viewContainer}>
            <Text>Login</Text>
        </View>
    );
}
const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
});
export default MainNavigation;
