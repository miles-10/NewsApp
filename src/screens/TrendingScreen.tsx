import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrendingNews from '@components/TrendingNews/TrendingNews';
import {trending} from '@components/trendingbutton';
import Button from '@components/CustomButton/CustomButton';

const TrendingScreen = () => {
  const data = trending;
  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.flat}
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => {
          return (
            <Button
              text={item.name} // onPress={()=>null}
            />
          );
        }}
      />
        <TrendingNews />
    </View>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  }
});
