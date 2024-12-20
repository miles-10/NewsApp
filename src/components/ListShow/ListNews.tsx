import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '@assets/colors/color';

interface list {
  id?: any;
  image?: any;
  title?: string;
  name?: string;
  date?: string;
  discription?: string;
}
const ListNews: FC<list> = ({id, image, title, name, date, discription}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {
      id,
      image,
      title,
      name,
      date,
      discription,
    });
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.mainContainer}>
        <View style={styles.list}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.name}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  list: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.red,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    width: '45%',
  },
  image: {
    height: '100%',
    borderRadius: 10,
    width: '100%',
  },
  textView: {
    marginTop: 10,
    width: '56%',
  },
  title: {
    color: Colors.black,
    marginTop: 5,
    fontSize: 13,
    fontFamily: 'Mont-Bold',
    marginBottom: 5,
  },
  name: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
  },
  text: {
    marginTop: '10%',
    fontSize: 11,
    fontFamily: 'Mont-Bold',
    margin: 3,
    color: Colors.red,
  },
});
