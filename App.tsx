import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigator from '@navigators/TabNavigators'
import Header from '@components/CustomHeader/Header'

const App = () => {
  return (
    <>
  {/* <Header /> */}
      <TabNavigator />
    </>
  )
}

export default App

const styles = StyleSheet.create({})