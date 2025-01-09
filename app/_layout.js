import { Stack } from 'expo-router';

export default function Rootlayout() {
  return (
    <Stack>
      <Stack.Screen
        name='Home'
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Next'
        options={{ headerShown: false }} />
    </Stack>

  )
};