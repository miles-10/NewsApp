import {StyleSheet, FlatList, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ListNews from '@components/ListShow/ListNews';
import {latestNews} from '@components/latestData';
import Colors from '@assets/colors/color';

const LatestNews = () => {
  const data = latestNews;
  return (
    <View style={styles.first}>
      <View style={styles.secondFlatlist}>
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
  },
});

export default LatestNews;
