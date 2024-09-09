import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from '../components/LoginScreen'

export default function RootLayout() {
  useFonts({
    'outfit':require('@/assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium':require('@/assets/fonts/Outfit-Medium.ttf'),
    'outfit-Bold':require('@/assets/fonts/Outfit-Bold.ttf')

  })
  return (
    <ClerkProvider publisherKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KE}>
    <SignedIn>
      <Stack screenOptions={{
      headerShown:false
        }}>
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
       </Stack>
    </SignedIn>
    <SignedOut>
      <LoginScreen />
    </SignedOut>
    </ClerkProvider>
  );
}
