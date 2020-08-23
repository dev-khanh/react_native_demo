/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function HomeScreen({ navigation }) {
    return (
        <View style={styles.viewContainer}>
            <Button
                title="Go to Profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Custom profile header' })
                }
            />
        </View>
    );
}
function ProfileScreen() {
    return (
        <View style={styles.viewContainer}>
            <Text>Profile screen</Text>
        </View>
    );
}
const Stack = createStackNavigator();
function MainNavigaHeader() {
    return (
        <NavigationContainer>
            {/* full Navigator null */}
            {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
            {/* <Stack.Navigator
                screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },                                               Styles Header and headerColor
                headerTintColor: '#fff',
                }}
            > */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'My home' }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={({ route }) => ({ title: route.params.name })}
                //options={{headerShown: false}} next screen header null
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
});
export default MainNavigaHeader;
