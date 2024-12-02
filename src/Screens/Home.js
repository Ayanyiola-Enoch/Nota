import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FONTS, COLORS, SIZES } from '../constants';
import { StatusBar } from "expo-status-bar";

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='grey' style='light' />
            <View style={{ borderWidth: 5, borderColor: "black" }}>
                <Text style={{ ...FONTS.h4, color: COLORS.black }}>Home</Text>
            </View>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: SIZES.h3a
        // padding: SIZES.width
    }
});