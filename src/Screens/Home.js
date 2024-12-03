import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FONTS, COLORS, SIZES } from '../constants';
import { StatusBar } from "expo-status-bar";

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='grey' style='light' />
            <View>
                <Text style={{ ...FONTS.h4, color: COLORS.black, textAlign: 'center' }}>Nota</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => clearTodo()}>
                    <Image source={icons.deleteImg} style={{ width: SIZES.h2, height: SIZES.h2 }} />
                </TouchableOpacity>
            </View>

        </View >
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: SIZES.h3a,
    }
});