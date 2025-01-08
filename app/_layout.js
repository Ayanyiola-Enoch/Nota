import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name='Home' />
      <Stack.Screen name='Next' />
    </Stack>

  )
}