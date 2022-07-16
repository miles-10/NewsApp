import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Colors from '@assets/colors/color';

interface button {
  onPress?: () => void;
  text?: string;
}
const CustomButton: FC<button> = ({onPress, text}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnActive}>
          <Text style={styles.textActive}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
  },
  btnActive: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    height: 36,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
  },
  btnInActive: {
    marginHorizontal: 5,
    marginTop: 20,
    height: 36,
    backgroundColor: Colors.semi_grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '20%',
    alignSelf: 'center',
  },
  textActive: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.white,
  },
  textInActive: {
    fontSize: 13,

    fontWeight: '400',
    color: Colors.grey,
  },
});
