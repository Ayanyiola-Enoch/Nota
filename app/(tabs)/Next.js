import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Next = () => {
  return (
    <View style={styles.container}>
      <Text>Next</Text>
    </View>
  )
}

export default Next;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
  }

});