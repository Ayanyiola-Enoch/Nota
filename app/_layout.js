import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from '../src/screens/Home'
import { COLORS, SIZES } from '../src/constants'
import Toast from 'react-native-toast-message';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <View style={styles.container}>
      <Home />
      <Next />
      <Toast />
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