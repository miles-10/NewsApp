import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '@assets/colors/color'
import ad from '@assets/images/ad.png'
import TopTab from '@navigators/TopTabSwitch';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
      <View>
        <Image style={styles.adImage} source={ad} />
      </View>
      <TopTab />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  container: {
    marginHorizontal: 15,
  },
  adImage: {
    height: 60,
    width: '100%',
  }
})