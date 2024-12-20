import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import Colors from '@assets/colors/color';
import {useNavigation} from '@react-navigation/native';

interface Clist {
  id?: any;
  image?: any;
  title?: string;
  name?: string;
  date?: string;
  discription?: string;
  item?: any;
}

const {width, height} = Dimensions.get('window');
const Carouselitem: FC<Clist> = ({
  id,
  image,
  title,
  name,
  date,
  discription,
  item,
}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    
    return navigation.navigate('DetailScreen', {
      id:item.id,
      image:item.image,
      title:item.title,
      name:item.name,
      date:item.date,
      discription:item.discription,
    });
  };
  return (
    <>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.cardView}>
          <View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.textView}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.textshow}>
                <View style={styles.nested}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.date}</Text>
                  <Text style={styles.text}>{item.state}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Carouselitem;

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    height: height / 3.5,
    backgroundColor: Colors.red,
    margin: 10,
    borderRadius: 20,
  },
  textView: {
    marginHorizontal: 10,
    position: 'absolute',
    zIndex: 2,
    margin: 10,
    borderRadius: 10,
    marginTop: height * 0.14,
    opacity: 0.95,
    backgroundColor: Colors.white,
    width: width * 0.90,
  },
  image: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 15,
    lineHeight: 17,
    letterSpacing: 0.4,
    color: Colors.black,
    fontFamily: 'Mont-Bold',
  },
  textshow: {},
  text: {
    flexDirection: 'row',
    // alignSelf: 'flex-end',
    fontSize: 12,
    fontFamily: 'Mont-Regular',
    color: Colors.red,
    lineHeight: 13,
    marginBottom: 10,
    marginTop: 15,
  },
  text2: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontSize: 12,
    fontFamily: 'Mont-Regular',
    color: Colors.red,
    lineHeight: 13,
    marginBottom: 10,
    marginTop: '4%',
    marginLeft: 30,
  },
  text3: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontSize: 12,
    fontFamily: 'Mont-Regular',
    color: Colors.red,
    lineHeight: 13,
    marginBottom: 10,
    marginTop: '4%',
    marginLeft: 40,
  },
  nested: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 55,
    // marginHorizontal: 10,
  },
  view: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
});
