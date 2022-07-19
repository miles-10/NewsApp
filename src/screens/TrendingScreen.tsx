import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrendingNews from '@components/TrendingNews/TrendingNews';
import {trending} from '@components/trendingbutton';
import Button from '@components/CustomButton/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const TrendingScreen = () => {
  const data = trending;
  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return <Button text={item.name} onPress={() => <TrendingNews />} />;
          }}
        />
        <TrendingNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({
  mainContainer: {},
});
