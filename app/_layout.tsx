import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SessionProvider } from "@/context/ctx";
import { useFonts } from "@/hooks/useFonts";
import { ThemeProvider } from "@/themes";
import { NavigationStructure } from "@/routes";
import { useOnboardingCheck } from "@/hooks/useOnboardingCheck";
import { ToastProvider } from "@/utils";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const fontsLoaded = useFonts();

  useOnboardingCheck(fontsLoaded);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider>
          <GestureHandlerRootView>
            <ToastProvider>
              <NavigationStructure />
            </ToastProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
