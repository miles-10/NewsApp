import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {province} from '@components/provience';
import Button from '@components/CustomButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import LatestNews from '@components/LatestNews/LatestNews';
import {AuthContext} from '@components/AuthContext/AuthContext';

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
              <Button id={item.id} text={item.name} onPress={setMyProvince} />
            );
          }}
        />
        <LatestNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProvinceScreen;

const styles = StyleSheet.create({
  mainContainer: {},
});
