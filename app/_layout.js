import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from '../src/screens/Home'
import { COLORS, SIZES } from '../src/constants'

const _layout = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.chocolateBackground,
    padding: SIZES.body1

  }
})