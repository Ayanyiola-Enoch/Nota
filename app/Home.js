import { StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FONTS, COLORS, SIZES, icons, } from '../src/constants';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { Link } from "expo-router";

const Home = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const navigation = useNavigation();

    const submit = async () => {
        try {
            if (input === "") {
                console.warn('empty todo');
                Toast.show({
                    type: 'error',
                    text1: 'Input is empty',
                    text2: 'Please Fill in the Input Field',
                    visibilityTime: 2000,
                })
            }
            else {
                const newTodo = {
                    id: Math.random(),
                    title: input,
                    isChecked: false,
                }
                setTodos([...todos, newTodo])
                setInput('');

                Toast.show({
                    type: 'success',
                    text1: 'Successful',
                    text2: 'Note Successfully added',
                    visibilityTime: 1000,
                })
            }

        } catch (error) {
            console.log('This is an error', error);
        }
    };

    const completeTodo = (id) => {
        const itemTodo = todos.filter((todo) => todo.id)
        setTodos(itemTodo);
    };

    const clearTodo = () => {
        setTodos([]);
        Toast.show({
            type: 'success',
            text1: 'Note Deleted',
            text2: 'Note Successfully Deleted',
            visibilityTime: 1000,
        });
    }

    const markTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isChecked = !todo.isChecked
            };
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='grey' style='light' />

            {/*HEADER*/}
            <View>
                <Link href="" />
                <Text style={{ ...FONTS.h3 }}>Hi, Enoch</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: SIZES.h4 }}>

                <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.black, }}>Today's tasks</Text>
                <TouchableOpacity onPress={clearTodo}>
                    <Image source={icons.delete2} style={{ width: SIZES.h2, height: SIZES.h2 }} />
                </TouchableOpacity>
            </View>


            <View style={{ flex: 1 }}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <View style={{ borderRadius: 5, borderWidth: 1, width: '100%', height: SIZES.h1 * 1.8, marginTop: SIZES.h2, justifyContent: 'center', paddingHorizontal: SIZES.h4 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ ...FONTS.body3, textDecorationLine: item.isChecked ? "line-through" : "none" }}>{item.title}</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => markTodo(item.id)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap: 5 }}>
                                    <View>
                                        <Image source={item.isChecked ? icons.select : icons.emptyBox} style={{ width: SIZES.h2, height: SIZES.h2 }} />
                                    </View>
                                    <TouchableOpacity onPress={() => completeTodo(item.id)}>
                                        <Image source={icons.delete2} style={{ width: SIZES.h2, height: SIZES.h2 }} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>


            {/*ADD MENU*/}

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextInput placeholder='Enter a new To-do' style={styles.text} onChangeText={setInput} value={input} />
                <TouchableOpacity onPress={submit} style={{ borderWidth: 1, borderRadius: SIZES.h1 * 5, padding: SIZES.h5 }}>
                    <Image source={icons.add} style={{ width: SIZES.h1 * 0.6, height: SIZES.h1 * 0.6, tintColor: COLORS.primary }} />
                </TouchableOpacity>
            </View>



        </View >
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SIZES.h1 * 1.5,
        color: COLORS.chocolateBackground
    },
    text: {
        borderWidth: 1,
        borderRadius: 5,
        width: SIZES.h1 * 8.7,
        height: SIZES.h1 * 1.5,
        paddingHorizontal: SIZES.h4,
    }
});