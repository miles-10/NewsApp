import {
    GestureResponderEvent,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {FC, useContext} from 'react';
  import Colors from '@assets/colors/color';
  import {AuthContext} from '@components/AuthContext/AuthContext';
  
  interface button {
    onPress?: () => void;
    text?: string;
    id?: any;
    style?: any;
  }
  const CustomButton: FC<button> = ({onPress, text, id, style}) => {
    const {myProvince, setMyProvince, setMyTrending} = useContext(AuthContext);
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setMyTrending(text)}
            style={styles.btnActive}>
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
  