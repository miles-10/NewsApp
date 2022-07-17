import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '@navigators/TabNavigators';
import DetailScreen from '@screens/DetailScreen';
import SplashScreen from '@screens/SplashScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  const [showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 6000);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {showSplashScreen ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : null}
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default MyStack;
