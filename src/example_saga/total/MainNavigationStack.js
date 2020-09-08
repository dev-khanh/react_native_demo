import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenContainer from '../containers/HomeScreenContainer';
import NextScreenContainer from '../containers/NextScreenContainer';
const Stack = createStackNavigator();
function MainNavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreenContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="next" component={NextScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigationStack;
