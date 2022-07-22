import {StyleSheet, FlatList, Text, View} from 'react-native';
import React, { useContext } from 'react';
import Colors from '@assets/colors/color';
import ListNews from '@components/ListShow/ListNews';
import {trendingNews} from '@components/trendingData';
import {AuthContext} from '@components/AuthContext/AuthContext';

const TrendingNews = () => {
  const data = trendingNews;
  const {myProvince, setMyProvince, myTrending} = useContext(AuthContext);
  return (
    <View style={styles.first}>
      <View style={styles.secondFlatlist}>
        <FlatList
          data={data.filter(pro => {
            return pro.state.toLowerCase() == myTrending.toLowerCase();
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

export default TrendingNews;

const styles = StyleSheet.create({
  first: {
    backgroundColor: Colors.semi_white,
    marginTop: 10,
    width: '100%',
  },
  secondFlatlist: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
