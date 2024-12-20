import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Logo from '@assets/images/NCLogo.png';
import {Surface} from 'react-native-paper';
import Svg, {Path} from 'react-native-svg';
import Colors from '@assets/colors/color';
import {AuthContext} from '@components/AuthContext/AuthContext';


const {width, height} = Dimensions.get('window');
const Header = () => {
  const [currentDate, setCurrentDate] = useState('');
  const {color, setColor} = useContext(AuthContext);
  const showToast = () => {
    Alert.alert('Feature Comming Soon!', 'This Feature is unavailable', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  useEffect(() => {
    const week = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let date = new Date().getDay();
    let week_name = week[date];
    let date_number = new Date().getDate();
    let month = new Date();
    let month_name = months[month.getMonth()];
    let year = new Date().getFullYear();

    setCurrentDate(
      week_name + ', ' + month_name + ' ' + date_number + ', ' + year,
    );
  }, []);
  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View style={styles.view}>
          <View style={styles.Logo}>
            <Image source={Logo} style={styles.image} />
          </View>
          <View style={styles.texts}>
            <Text style={[styles.text, {color}]}>Nepali Congress</Text>
            <Text style={styles.date}>{currentDate}</Text>
          </View>
          <TouchableOpacity onPress={showToast}>
            <View style={styles.search}>
              <Svg width={23} height={23} stroke={Colors.black}>
                <Path d="M9.78031 16.7341C13.4622 16.7341 16.447 13.7494 16.447 10.0675C16.447 6.38556 13.4622 3.40079 9.78031 3.40079C6.09842 3.40079 3.11365 6.38556 3.11365 10.0675C3.11365 13.7494 6.09842 16.7341 9.78031 16.7341Z" />
                <Path d="M18.1136 18.4008L14.4886 14.7758" />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  view: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Logo: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.15,
    height: height * 0.0444,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  texts: {
    marginRight: width * 0.155,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Mont-Bold',
    width: width * 0.5,
  },
  date: {
    marginTop: 2,
    fontSize: 13,
    color: Colors.grey,
    fontFamily: 'Mont-Regular',
  },
  search: {
    marginRight: 10,
  },
});
