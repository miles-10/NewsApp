import {StyleSheet, FlatList, View} from 'react-native';
import React, {useContext} from 'react';
import ListNews from '@components/ListShow/ListNews';
import Colors from '@assets/colors/color';
import {AuthContext} from '@components/AuthContext/AuthContext';
import {latestData1} from '@components/LatestData/LatestData1';
import Carouselitem from '@components/Carousel/Carousel';
import {carouseldata} from '@components/caroseldata';

const LatestNews = () => {
  const data = latestData1;
  const {myProvince, setMyProvince} = useContext(AuthContext);
  return (
    <>
      <Carouselitem data={carouseldata} />
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
    </>
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
    width: '95%',
  },
});

export default LatestNews;
