import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProvinceScreen from '@screens/ProvinceScreen';
import TrendingScreen from '@screens/TrendingScreen';
import Colors from '@assets/colors/color';
import {SafeAreaView, Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const NEw = () => {
  return( 
  <View style={{flex: 1, backgroundColor: Colors.red}}>
  <Text>Hello, world!</Text>
  </View>
  )
}
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
      {/* <Tab.Screen name=" " component={AddButton} /> */}
    </Tab.Navigator>
  );
};
export default HomeTab;
