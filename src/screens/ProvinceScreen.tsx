import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {createContext, useContext, useRef, useState} from 'react';
import {province} from '@components/provience';
import Button from '@components/CustomButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import Carouselitem from '@components/Carousel/Carousel';
import {carouseldata} from '@components/caroseldata';
import TrendingNews from '@components/TrendingNews/TrendingNews';
import LatestNews from '@components/LatestNews/LatestNews';
import Colors from '@assets/colors/color';
// import latestData1 from '@components/LatestData/latestData1';
import { AuthContext } from '@components/AuthContext/AuthContext';
import { latestData1 } from '@components/LatestData/LatestData1';

const ProvinceScreen = () => {
  const {myProvince, setMyProvince} = useContext(AuthContext);
  const data = province;
  const ref = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={data}
        contentContainerStyle={{
          paddingHorizontal: 0,
        }}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => {
          return (
            <Button
              id={item.id}
              text={item.name} 
              onPress={()=> setMyProvince(item.name)}
            />
          );
        }}
      />
       <Carouselitem data={carouseldata} />
        {/* <TrendingNews /> */}
        {/* <LatestNews/> */}
        </ScrollView>
    </SafeAreaView>
  );
};

export default ProvinceScreen;

const styles = StyleSheet.create({
  mainContainer: {
    
  }
});
