import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '@assets/colors/color';
import Svg, {Path} from 'react-native-svg';
import Header from '@components/CustomHeader/Header';
import HomeScreen from '@screens/HomeScreen';
import SavedScreen from '@screens/SavedScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 11,
            marginBottom: 10,
            color: Colors.grey,
          },

          tabBarStyle: {
            marginHorizontal: 120,
            backgroundColor: Colors.white,
            elevation: 0,
            height: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Svg width={23} height={23} stroke={Colors.red}>
                <Path d="M3.23108 7.9142L10.7311 2.08087L18.2311 7.9142V17.0809C18.2311 17.5229 18.0555 17.9468 17.7429 18.2594C17.4304 18.5719 17.0064 18.7475 16.5644 18.7475H4.89775C4.45572 18.7475 4.03179 18.5719 3.71923 18.2594C3.40667 17.9468 3.23108 17.5229 3.23108 17.0809V7.9142Z" />
              </Svg>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SavedScreen}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: () => (
              <Svg width={23} height={23} stroke={Colors.red}>
                <Path d="M16.0183 17.9142L10.1849 14.5809L4.35159 17.9142V4.58085C4.35159 4.13882 4.52719 3.7149 4.83975 3.40234C5.15231 3.08978 5.57623 2.91418 6.01826 2.91418H14.3516C14.7936 2.91418 15.2175 3.08978 15.5301 3.40234C15.8427 3.7149 16.0183 4.13882 16.0183 4.58085V17.9142Z" />
              </Svg>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
