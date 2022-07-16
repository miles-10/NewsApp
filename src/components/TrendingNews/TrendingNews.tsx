import {StyleSheet, FlatList, Text, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/color';
import ListNews from '@components/ListShow/ListNews';
import {trendingNews} from '@components/trendingData';

const TrendingNews = () => {
  const data = trendingNews;
  return (
    <View style={styles.secondFlatlist}>
      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <ListNews
                id={show.item.id}
                image={show.item.image}
                title={show.item.title}
                name={show.item.name}
                date={show.item.date}
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
  secondFlatlist: {
    marginTop: 20,
    backgroundColor: Colors.semi_grey,
  },
  list: {
    
    marginTop: 10,
    marginHorizontal: 10,
  }
});
