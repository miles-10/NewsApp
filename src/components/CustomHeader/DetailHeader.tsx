import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import Svg, {Path} from 'react-native-svg';
import Colors from '@assets/colors/color';
import {useNavigation} from '@react-navigation/native';

const DetaiHeader = () => {
  const navigation = useNavigation();
  const showToast = () => {
    Alert.alert('Feature Comming Soon!', 'This Feature is unavailable', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
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
            <View style={styles.icon1}>
              <TouchableOpacity onPress={showToast}>
                <Svg width={23} height={23} stroke={Colors.red}>
                  <Path d="M16.0183 17.9142L10.1849 14.5809L4.35159 17.9142V4.58085C4.35159 4.13882 4.52719 3.7149 4.83975 3.40234C5.15231 3.08978 5.57623 2.91418 6.01826 2.91418H14.3516C14.7936 2.91418 15.2175 3.08978 15.5301 3.40234C15.8427 3.7149 16.0183 4.13882 16.0183 4.58085V17.9142Z" />
                </Svg>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={showToast}>
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
      </Surface>
    </SafeAreaView>
  );
};

export default DetaiHeader;

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.semi_white,
  },
  view: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Logo: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 80,
  },
  texts: {
    marginRight: 40,
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
    marginRight: 10,
  },
  icon1: {
    marginRight: 20,
  },
});
