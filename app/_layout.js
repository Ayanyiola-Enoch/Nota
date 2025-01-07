import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Toast from 'react-native-toast-message';
import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name='Home' />
      <Stack.Screen name='Next' />
    </Stack>

  )
}