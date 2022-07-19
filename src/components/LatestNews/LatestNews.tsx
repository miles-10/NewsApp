import {StyleSheet, FlatList, Text, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import ListNews from '@components/ListShow/ListNews';
import {latestNews} from '@components/latestData';
import Colors from '@assets/colors/color';
import {AuthContext} from '@components/AuthContext/AuthContext';
import { latestData1 } from '@components/LatestData/LatestData1';

const LatestNews = () => {
  const data = latestData1;
  console.log(data);
  const {myProvince, setMyProvince} = useContext(AuthContext);
  console.log(myProvince);
  return (
    <View style={styles.first}>
      <View style={styles.secondFlatlist}>
        <FlatList
          data={data.filter(pro => {
            return pro.state.toLowerCase() == myProvince.toLowerCase();
          })}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <ListNews
                id={show.item.id}
                image={show.item.image}
                title={show.item.title}
                name={show.item.name}
                date={show.item.date}
                discription={show.item.discription}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    backgroundColor: Colors.semi_white,
    marginTop: 10,
  },
  secondFlatlist: {
    marginTop: 10,
    marginHorizontal: 10,
    width: '90%',
  },
});

export default LatestNews;
