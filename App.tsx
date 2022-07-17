import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigator from '@navigators/TabNavigators';
import Header from '@components/CustomHeader/Header';
import ProvinceScreen from '@screens/ProvinceScreen';
import Carouselitem from '@components/Carousel/Carousel';
import {carouseldata} from '@components/caroseldata';
import TrendingScreen from '@screens/TrendingScreen';
import LatestNews from './src/components/LatestNews/LatestNews'
import DetailScreen from '@screens/DetailScreen';
import StackNavigators from '@navigators/StackNavigators';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from '@navigators/TopTabSwitch';
import CustomSwitch from '@components/CustomSwitch/CustomSwitch';
import HomeScreen from '@screens/HomeScreen';
const App = () => {
  return (
    <>
    <NavigationContainer>
    <StackNavigators />
    {/* <TabNavigator /> */}
    {/* <TrendingScreen /> */}
    {/* <HomeScreen /> */}
    {/* <HomeTab/> */}
    {/* <CustomSwitch /> */}
    </NavigationContainer>
    
      {/* <Header /> */}
      {/* <TabNavigator /> */}
      {/* <NavigationContainer>
      <ProvinceScreen />
      </NavigationContainer> */}
      {/* <Carouselitem data={carouseldata} /> */}
      {/* <TrendingScreen /> */}
      {/* <LatestNews /> */}
      {/* <DetailScreen /> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
