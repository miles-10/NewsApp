import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Colors from '@assets/colors/color';
import {AuthContext} from '@components/AuthContext/AuthContext';

const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}: any) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const {color, setColor} = useContext(AuthContext);
  const updateSwitchData = (value: any) => {
    setSelectionMode(value);
    onSelectSwitch(value);
    if (value == 2) {
      setColor(Colors.red);
    } else {
      setColor(Colors.black);
    }
  };
  return (
    <>
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => updateSwitchData(1)}>
            <Text
              style={{
                color: getSelectionMode == 1 ? Colors.black : Colors.semi_grey,
                position: 'absolute',
                fontWeight: '600',
                fontFamily:
                  getSelectionMode == 1 ? 'Mont-Bold' : 'Mont-Regular',
                fontSize: 16,
                left: 15,
              }}>
              {option1}
            </Text>
            <View
              style={{
                marginTop: 50,
                height: getSelectionMode == 1 ? 5 : 2,
                width: '100%',
                backgroundColor:
                  getSelectionMode == 1 ? Colors.red : Colors.semi_grey,
                borderRadius: 10,
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => updateSwitchData(2)}>
            <Text
              style={{
                color: getSelectionMode == 2 ? Colors.black : Colors.semi_grey,
                fontWeight: '600',
                fontFamily:
                  getSelectionMode == 2 ? 'Mont-Bold' : 'Mont-Regular',
                fontSize: 15,
                position: 'absolute',
                left: 15,
              }}>
              {option2}
            </Text>
            <View
              style={{
                marginTop: 50,
                height: getSelectionMode == 2 ? 5 : 2,
                width: '100%',
                backgroundColor:
                  getSelectionMode == 2 ? Colors.red : Colors.semi_grey,
                borderRadius: 10,
              }}></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 2,

            zIndex: -1,
            height: 3,
            width: '90%',
            backgroundColor: Colors.semi_grey,
            borderRadius: 10,
          }}></View>
      </View>
    </>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 44,
    marginHorizontal: 20,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },
});
