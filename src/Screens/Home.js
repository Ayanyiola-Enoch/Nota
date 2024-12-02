import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FONTS, COLORS, SIZES } from '../constants';
import { StatusBar } from "expo-status-bar";

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='grey' style='light' />
            <View>
                <Text style={{ ...FONTS, color: COLORS.black }}>Home</Text>
            </View>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.chocolateBackground,
        padding: SIZES.height
    }
});