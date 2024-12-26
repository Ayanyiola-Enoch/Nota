import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from '../src/screens/Home'
import { COLORS, SIZES } from '../src/constants'
import Toast from 'react-native-toast-message';

const _layout = () => {
  return (
    <View style={styles.container}>
      <Toast />
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