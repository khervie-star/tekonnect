import React from "react";
import { Stack } from "expo-router";
import { Toasts } from "@backpackapp-io/react-native-toast";

export const NavigationStructure = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="app" options={{ headerShown: false }} /> */}
      <Stack.Screen
        name="(onboarding)/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="get-started/index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="auth/sign-up/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="permissions/location/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="permissions/notification/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="user/create-profile/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="user/create-profile/setup/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="user/qr-card/index"
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="app/"
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};
