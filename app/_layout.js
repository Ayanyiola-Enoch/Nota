import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Next from './(tabs)/Next';
import index from './(tabs)/index';
const Stack = createStackNavigator();

const _layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator c>
        <Stack.Screen
          name="Home"
          component={index}
          options={{ headerShown: false }} // This removes the header
        />
        <Stack.Screen
          name="Next"
          component={Next}
          options={{ headerShown: false }} // This removes the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default _layout;
















// import { Stack } from 'expo-router';

// export default function Home() {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="(tabs)"
//         options={{ headerShown: false }} />
//     </Stack>

//   )
// }