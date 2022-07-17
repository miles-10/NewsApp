import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {province} from '@components/provience';
import Button from '@components/CustomButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import Carouselitem from '@components/Carousel/Carousel';
import {carouseldata} from '@components/caroseldata';
import TrendingNews from '@components/TrendingNews/TrendingNews';
import LatestNews from '@components/LatestNews/LatestNews';
import Colors from '@assets/colors/color';

const ProvinceScreen = () => {
  const data = province;
  const ref = useRef<FlatList>(null);
  console.log(data);
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => {
          return (
            <Button
              text={item.name} 
              onPress={()=> <LatestNews />}
            />
          );
        }}
      />
       <Carouselitem data={carouseldata} />
        {/* <TrendingNews /> */}
        <LatestNews/>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ProvinceScreen;

const styles = StyleSheet.create({
  mainContainer: {
    
  }
});
