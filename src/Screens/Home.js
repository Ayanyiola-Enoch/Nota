import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FONTS, COLORS } from '../constants';

const Home = () => {
    return (
        <View>
            <Text style={{ ...FONTS, color: COLORS.white }}>Home</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({})