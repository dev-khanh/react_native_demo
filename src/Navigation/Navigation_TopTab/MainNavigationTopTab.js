/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
    return (
        <View style={styles.viewContainer}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.viewContainer}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function MainNavigationTop() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {/* <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 12 },
                    tabStyle: { width: 100 },
                    style: { backgroundColor: 'powderblue' },                       Style TAB navigation
                }}
            > */}
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    },
});



// <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//         labelStyle: { fontSize: 12 },
//         style: { backgroundColor: 'powderblue' },
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={FeedScreen}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NotificationsScreen}
//         options={{ tabBarLabel: 'Updates' }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//     </Tab.Navigator>
