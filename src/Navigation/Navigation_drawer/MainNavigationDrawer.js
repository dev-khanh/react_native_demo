/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Feed({ navigation }) {
    return (
        <View style={styles.viewContainer}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function Notifications() {
    return (
        <View style={styles.viewContainer}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export default function MainNavigationDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />} >
                <Drawer.Screen name="Feed" component={Feed} />
                <Drawer.Screen name="Notifications" component={Notifications} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
});
