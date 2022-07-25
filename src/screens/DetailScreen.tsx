import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import DetailHeader from '@components/CustomHeader/DetailHeader';
import Colors from '@assets/colors/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Surface} from 'react-native-paper';
import Svg, {Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';
import {useSaved} from '@components/AuthContext/SavedContext';

const {width, height} = Dimensions.get('window');
const DetailScreen = ({route}: any) => {
  const {saved, setSaved} = useSaved();
  const navigation = useNavigation();
  const shareData = async () => {
    const shareOptions = {
      message: 'This is a test message',
    };
    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error==>', error);
    }
  };

  const {id, title, discription, date, image, name} = route.params;
  const saveNews = () => {
    const save = {id, title, discription, date, image, name};
    const updatedNews = [...saved, save];
    setSaved(updatedNews);
    AsyncStorage.setItem('Saved', JSON.stringify(updatedNews));
    console.log('update', updatedNews);
    Alert.alert(
      'Saved Successfully',
      'You can view your saved news in the Saved tab',
    );
  };

  const removeNews = () => {
    const updatedNews = saved.filter((item: any) => item.id !== id);
    setSaved(updatedNews);
    AsyncStorage.setItem('saved', JSON.stringify(updatedNews));
    Alert.alert('Removed Successfully');
  };

  const savedNews = saved.find((item: any) => item.id === id);
  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View style={styles.view}>
          <View style={styles.Logo}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Svg width={23} height={23} stroke={Colors.red}>
                <Path d="M9 17.3315L4 12.3315L9 7.33154" />
                <Path d="M20 18.3315V16.3315C20 15.2707 19.5786 14.2533 18.8284 13.5031C18.0783 12.753 17.0609 12.3315 16 12.3315H4" />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.texts}>
            <Text style={styles.text}>Nepali Congress</Text>
          </View>
          <View style={styles.search}>
            {savedNews ? (
              <View style={styles.icon1}>
                <TouchableOpacity onPress={() => removeNews()}>
                  <Svg
                    width={23}
                    height={23}
                    stroke={Colors.red}
                    fill={Colors.red}>
                    <Path d="M16.0183 17.9142L10.1849 14.5809L4.35159 17.9142V4.58085C4.35159 4.13882 4.52719 3.7149 4.83975 3.40234C5.15231 3.08978 5.57623 2.91418 6.01826 2.91418H14.3516C14.7936 2.91418 15.2175 3.08978 15.5301 3.40234C15.8427 3.7149 16.0183 4.13882 16.0183 4.58085V17.9142Z" />
                  </Svg>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.icon1}>
                <TouchableOpacity onPress={() => saveNews()}>
                  <Svg width={23} height={23} stroke={Colors.red} fill="none">
                    <Path d="M16.0183 17.9142L10.1849 14.5809L4.35159 17.9142V4.58085C4.35159 4.13882 4.52719 3.7149 4.83975 3.40234C5.15231 3.08978 5.57623 2.91418 6.01826 2.91418H14.3516C14.7936 2.91418 15.2175 3.08978 15.5301 3.40234C15.8427 3.7149 16.0183 4.13882 16.0183 4.58085V17.9142Z" />
                  </Svg>
                </TouchableOpacity>
              </View>
            )}
            <View>
              <TouchableOpacity onPress={() => shareData()}>
                <Svg width={23} height={23} stroke={Colors.red}>
                  <Path d="M15 6.9982C16.3807 6.9982 17.5 5.87891 17.5 4.4982C17.5 3.11749 16.3807 1.9982 15 1.9982C13.6193 1.9982 12.5 3.11749 12.5 4.4982C12.5 5.87891 13.6193 6.9982 15 6.9982Z" />
                  <Path d="M5 12.8315C6.38071 12.8315 7.5 11.7123 7.5 10.3315C7.5 8.95083 6.38071 7.83154 5 7.83154C3.61929 7.83154 2.5 8.95083 2.5 10.3315C2.5 11.7123 3.61929 12.8315 5 12.8315Z" />
                  <Path d="M15 18.6649C16.3807 18.6649 17.5 17.5456 17.5 16.1649C17.5 14.7842 16.3807 13.6649 15 13.6649C13.6193 13.6649 12.5 14.7842 12.5 16.1649C12.5 17.5456 13.6193 18.6649 15 18.6649Z" />
                  <Path d="M7.15833 11.5899L12.85 14.9065" />
                  <Path d="M12.8417 5.75653L7.15833 9.0732" />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Surface>

      <ScrollView style={styles.scroll}>
        <View>
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <Text style={styles.textTitle}>{route.params.title}</Text>
              <View style={styles.rowData}>
                <Text style={styles.text1}>{route.params.name}</Text>
                <Text style={styles.text2}>{route.params.date}</Text>
              </View>
              <View>
                <Image style={styles.image} source={route.params.image} />
              </View>
              <Text style={styles.details}>{route.params.discription}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  container: {
    marginHorizontal: 20,
  },
  textTitle: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Mont-Light',
    fontWeight: '700',
    color: Colors.black,
  },
  rowData: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: 12,
    marginRight: 20,
    fontWeight: '600',
    fontFamily: 'Mont-Regular',
    color: Colors.red,
  },
  text2: {
    fontSize: 12,
    fontFamily: 'Mont-Regular',
    fontWeight: '600',
    color: Colors.red,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  details: {
    marginTop: 10,
    fontFamily: 'Mont-Regular',
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 15,
  },
  header: {
    height: height * 0.09,
    width: width,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.semi_white,
  },
  view: {
    width: width,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Logo: {
    marginLeft: width * 0.04722,
    alignItems: 'center',
    flexDirection: 'row',
  },
  texts: {
    marginLeft: 0.191 * width,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Mont-Bold',
    color: Colors.black,
  },
  date: {
    fontSize: 14,
    color: Colors.grey,
  },
  search: {
    flexDirection: 'row',
    marginRight: width * 0.04722,
    marginLeft: width * 0.09,
  },
  icon1: {
    marginRight: 5,
  },
});
