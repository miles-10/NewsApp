import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '@assets/colors/color'

const TrendingNewsItem = ({item}: any) => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.imageShow}>
      <Image style={styles.image} source={{uri: item.image}} />
    </View>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);
};

export default TrendingNewsItem;

const styles = StyleSheet.create({
mainContainer: {
  marginTop: 10,
  flexDirection: 'row',
  flex: 1,
  marginHorizontal: 20,
},
imageShow: {
  height: '20%',
  width: '45%',
  backgroundColor: Colors.red,
  borderRadius: 10,
},

image: {},
title: {
  fontSize: 16,
  fontWeight: 'bold',
},
});
