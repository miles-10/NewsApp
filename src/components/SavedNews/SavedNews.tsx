import React from 'react';
import {StyleSheet, FlatList, View, Text, Dimensions} from 'react-native';

import ListNews from '@components/ListShow/ListNews';

import Colors from '@assets/colors/color';

const SavedNews = (data: any) => {
  const test = data;
  return (
    <>
      <View style={styles.semiContainer}>
        <Text style={styles.text}>Saved News</Text>
      </View>
      <View style={styles.first}>
        <View style={styles.secondFlatlist}>
          <FlatList
            data={test.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <ListNews
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  name={item.name}
                  date={item.date}
                  discription={item.discription}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  first: {
    backgroundColor: Colors.semi_grey,
    marginTop: 5,
    width: '100%',
  },
  secondFlatlist: {},
  semiContainer: {
    marginHorizontal: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Mont-Bold',
    color: Colors.black,
  },
});

export default SavedNews;
