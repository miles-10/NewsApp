import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import TrendingNews from '@components/TrendingNews/TrendingNews';
import {trending} from '@components/trendingbutton';
import Button1 from '@components/CustomButton/CustomButton1';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '@components/AuthContext/AuthContext';

const TrendingScreen = () => {
  const data = trending;
  const {myProvince, setMyProvince, setMyTrending} = useContext(AuthContext);
  const ref = useRef<FlatList>(null);
  const [index] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <FlatList
          ref={ref}
          data={data}
          initialScrollIndex={index}
          keyExtractor={(item, indexes) => 'key' + indexes}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return <Button1 text={item.name} onPress={setMyTrending} />;
          }}
          style={styles.container}
        />
        <TrendingNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    marginRight: 10,
    marginLeft: 3,
  },
});
