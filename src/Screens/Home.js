import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { FONTS, COLORS, SIZES, icons } from '../constants';
import { StatusBar } from "expo-status-bar";

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='grey' style='light' />
            <View>
                <Text style={{ ...FONTS.h3, color: COLORS.black, }}>Todos</Text>
            </View>

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View onPress={() => clearTodo()}>
                    <Image source={icons.deleteImg} style={{ width: SIZES.h2, height: SIZES.h2 }} />
                </View>
            </View> */}

        </View >
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: SIZES.h3a,
    }
});