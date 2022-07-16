import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailHeader from '@components/CustomHeader/DetailHeader'

const DetailScreen = ({props}: any) => {
  // console.log(props.title)
  return (
    <View>
      <DetailHeader />
      <View>
        <Text>{}</Text>
      </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})