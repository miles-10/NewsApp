import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useContext, useState} from 'react';
import Colors from '@assets/colors/color';
import {AuthContext} from '@components/AuthContext/AuthContext';

interface button {
  onPress?: () => void;
  text?: any;
  id?: any;
}
const CustomButton: FC<button> = ({onPress, text, id}) => {
  const {myTrending, setMyTrending} = useContext(AuthContext);
  const [index] = useState(0);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          key={index}
          onPress={() => setMyTrending(text)}
          style={
            myTrending.toLowerCase() == text.toLowerCase()
              ? styles.btnActive
              : styles.btnInActive
          }>
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
    marginHorizontal: 5,
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
    width: '90%',
    alignSelf: 'center',
  },
  btnInActive: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    height: 36,
    backgroundColor: Colors.semi_grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  textActive: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Mont-Regular',
    color: Colors.white,
  },
  textInActive: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.grey,
  },
});
