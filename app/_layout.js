import { Stack } from 'expo-router';

export default function Home() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }} />

    </Stack>

  )
}