/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function HomeScreen({ navigation }) {
    return (
        <View style={styles.viewContainer}>
            <Button title="Go to Details"
                onPress={() => {
                    navigation.navigate('Details', {
                        otherParam: 'anything you want here',
                    });
                }}
            />
        </View>
    );
}
function DetailsScreen({ route }) {
    const { otherParam } = route.params;
    return (
        <View style={styles.viewContainer}>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        </View>
    );
}
const Stack = createStackNavigator();
export default function NavigationParams() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
});
