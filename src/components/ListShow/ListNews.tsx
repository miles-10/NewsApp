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
}
const ListNews: FC<list> = ({id, image, title, name, date}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {id, image, title, name, date} );
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
    width: '57%',
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 20,
    margin: 3,
  },
});
