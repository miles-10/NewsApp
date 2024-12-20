import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import React from 'react';
import Carouselitem from './Carouselitem';
import Colors from '@assets/colors/color';

const {width, height} = Dimensions.get('window');

const Carousel = ({data}: any) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  if (data && data.length > 0) {
    return (
      <>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            renderItem={({item}) => {
              return <Carouselitem item={item} />;
            }}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}},
            ])}
          />
          <View style={styles.bar}>
            {data.map((_: any, i: any) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    height: 5,
                    width: 30,
                    backgroundColor: Colors.grey,
                    margin: 8,
                    borderRadius: 10,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.semiContainer}>
          <Text style={styles.text}>Latest News</Text>
        </View>
      </>
    );
  }
  console.log('Please Provide Images');
  return null;
};

export default Carousel;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  semiContainer: {
    marginHorizontal: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Mont-Bold',
    color: Colors.black,
  },
});
