import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProvinceScreen from '@screens/ProvinceScreen';
import TrendingScreen from '@screens/TrendingScreen';
import Colors from '@assets/colors/color';

const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Provinces"
      screenOptions={{
        tabBarStyle: {
          marginRight: 80,
          elevation: 0,
          borderBottomColor: Colors.red,
        },
        tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
        tabBarIndicatorStyle: {
          backgroundColor: Colors.red,
          borderColor: Colors.red,
          borderWidth: 2,
        },
      }}>
      <Tab.Screen name="Provinces" component={ProvinceScreen} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
    </Tab.Navigator>
  );
};
export default HomeTab;
