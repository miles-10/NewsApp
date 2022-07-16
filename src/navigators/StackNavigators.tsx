import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '@navigators/TabNavigators';
import ProvinceScreen from '@screens/ProvinceScreen';
import DetailScreen from '@screens/DetailScreen';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
        }}    
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      {/* <Stack.Screen name="Provience" component={ProvinceScreen} /> */}
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
export default MyStack;