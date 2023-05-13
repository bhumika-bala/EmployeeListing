import React from 'react';
import AddEmployee from '../screens/AddEmployee/index';
import Dashboard from '../screens/Dashboard/Dashboard';
import AddButtonScreen from '../screens/AddButtonScreen/AddButtonScreen';
import DetailScreen from '../screens/Detail/Detail';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="DetailScreen" component={DetailScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AddButtonScreen" component={AddButtonScreen} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
