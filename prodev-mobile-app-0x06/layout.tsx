import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Main Screens */}
      <Stack.Screen name="index" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />

      {/* Optional: Home tabs */}
      <Stack.Screen name="(home)/index" />
    </Stack>
  );
}
