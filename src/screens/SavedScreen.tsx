import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/color';

const SavedScreen = () => {
  const showToast = () => {
    Alert.alert('Feature Comming Soon!', 'This Feature is unavailable', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={showToast}>
        <Text style={styles.text}>Comming Soon!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  text: {
    marginTop: 300,
    color: Colors.red,
    fontSize: 20,
    fontFamily: 'Mont-Bold',
  },
});
