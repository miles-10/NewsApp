import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/color';

import {useSaved} from '@components/AuthContext/SavedContext';
import SavedNews from '@components/SavedNews/SavedNews';
const SavedScreen = ({route}: any) => {
  const {saved} = useSaved();

  return (
  <View style={styles.mainContainer}>
  <SavedNews data={saved} />
  </View>
  )
};

export default SavedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.semi_grey,
    height: '100%',
  }
})
