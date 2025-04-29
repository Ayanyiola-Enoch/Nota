import { StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons, images, COLORS, SIZES } from '../../src/constants'
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

const Home = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    // const navigation = useNavigation();
    const router = useRouter();

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
                <Text style={{ fontSize: 18 }}>Hi, Enoch</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: "black" }}>Today's tasks</Text>
                <TouchableOpacity onPress={clearTodo}>
                    <Image source={icons.delete2} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>

            <Link href="/(tabs)/Next" style={{ backgroundColor: "pink", padding: 10, borderRadius: 5, width: 80, justifyContent: 'center', alignItems: 'center' }}>MOVE</Link>
            <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18 }}>Add</Text>



            <View style={{ flex: 1 }}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <View style={{ borderRadius: 5, borderWidth: 1, width: '100%', height: 16, marginTop: 10, justifyContent: 'center', paddingHorizontal: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ ...FONTS.body3, textDecorationLine: item.isChecked ? "line-through" : "none" }}>{item.title}</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => markTodo(item.id)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap: 5 }}>
                                    <View>
                                        <Image source={item.isChecked ? icons.select : icons.emptyBox} style={{ width: 20, height: 20 }} />
                                    </View>
                                    <TouchableOpacity onPress={() => completeTodo(item.id)}>
                                        <Image source={icons.delete2} style={{ width: 20, height: 20 }} />
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
                <TouchableOpacity onPress={submit} style={{ borderWidth: 1, borderRadius: 18, padding: 16 }}>
                    <Image source={icons.add} style={{ width: 20, height: 16, tintColor: "pink" }} />
                </TouchableOpacity>
            </View>



        </View >
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 17,
        color: "chocolateBackground"
    },
    text: {
        borderWidth: 1,
        borderRadius: 5,
        width: 16,
        height: 14,
        paddingHorizontal: 10,
    }
});