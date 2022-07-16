import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@assets/colors/color';

const CustomSwitch = ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch,
}: any) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const updateSwitchData = (value: any) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }
  return (
    <View style={styles.container}>
     <TouchableOpacity style={{
        flex: 1,
        // backgroundColor: getSelectionMode === 1 ? Colors.red : Colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
     }} onPress={()=> updateSwitchData(1)}>
        <Text style={{
            color: getSelectionMode == 1 ? Colors.black : Colors.grey,
            position: 'absolute',
            fontWeight: getSelectionMode == 1 ? '800' : '600',
            fontSize: 16,
            left: 30,
        }}>{option1}</Text>
        <View style={{
            marginTop: 50,
            height: getSelectionMode == 1 ? 5 : 3,
            width:"100%",
            backgroundColor: getSelectionMode == 1 ? Colors.red : Colors.grey,
            borderRadius: 10,
        }}></View>
     </TouchableOpacity>
     <TouchableOpacity style={{
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
     }} onPress={()=> updateSwitchData(2)}>
        <Text style={{
             color: getSelectionMode == 2 ? Colors.black : Colors.grey,
            fontWeight: getSelectionMode == 2 ? '800' : '600',
            fontSize: 15,
            position: 'absolute',
            left: 30,
        }}>{option2}</Text>
        <View style={{
            marginTop: 50,
            height: getSelectionMode ==2 ? 5 : 3,
            width:"100%",
            backgroundColor: getSelectionMode == 2 ? Colors.red : Colors.grey,
            borderRadius: 10,
            
        }}></View>
     </TouchableOpacity>
    </View>
  )
}

export default CustomSwitch

const styles = StyleSheet.create({
    container: {
        height: 44,
        marginHorizontal:20,
        // backgroundColor: Colors.red,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
    },
    // touch: {
    //     flex: 1,
    //     backgroundColor: getSelectionMode === 1 ? Colors.red : Colors.grey,
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // }
})