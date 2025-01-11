import { Stack } from 'expo-router';

export default function Rootlayout() {
  return (
    <Stack>
      <Stack.Screen
        name='Home'
        screenOptions={{ headerShown: false }} />
      <Stack.Screen
        name='Next'
        screenOptions={{ headerShown: false }} />
    </Stack>

  )
};