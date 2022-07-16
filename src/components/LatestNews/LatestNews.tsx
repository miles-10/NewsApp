import {StyleSheet, FlatList, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ListNews from '@components/ListShow/ListNews';
import {latestNews} from '@components/latestData';

const LatestNews = () => {
  const data = latestNews;
  return (
    <View style={styles.secondFlatlist}>
      <View>
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

const styles = StyleSheet.create({
  secondFlatlist: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default LatestNews;
